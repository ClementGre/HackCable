import draw2d from "draw2d";
import {connectionsPolicy} from "./connections-policies";
import {CoordinatePortLocator} from "./coordinate-port-locator";
import {ComponentFigure} from "./component-figure";
import {wokwiComponentByClass} from "../panels/component";
import {ArduinoUnoElement, Dht22Element, LEDElement, NeoPixelElement} from "@wokwi/elements";
import {css} from "../utils/dom";

const DEFAULT_ZOOM = .6;

export class Canvas extends draw2d.Canvas{

    private selected: any = null;

    constructor(divId: string){
        super(divId);

        // Overlay
        this.overlayContainer = document.querySelector('.hackCable-canvas-overlay-container');
        this.html.prepend(this.overlayContainer);

        this.setScrollArea(document.querySelector('.hackCable-canvas'))

        // Edit policies
        this.installEditPolicy(new draw2d.policy.canvas.PanningSelectionPolicy())
        this.installEditPolicy(new draw2d.policy.canvas.SnapToGeometryEditPolicy())
        this.installEditPolicy(new draw2d.policy.canvas.SnapToInBetweenEditPolicy())
        this.installEditPolicy(new draw2d.policy.canvas.SnapToCenterEditPolicy())
        this.installEditPolicy(connectionsPolicy);

        // Listeners
        this.on("select", (_emitter: any, event: any) => this.onSelectionChange(event.figure));
        this.on("zoom", () => this.onZoomChange());
        /*this.on("figure:add", () => {});*/

        this.setZoom(DEFAULT_ZOOM)

        // Add test figures
        let rect = new draw2d.shape.basic.Rectangle({x: 100, y: 10, stroke: 3, color: "#9e0000", bgColor: "#cd0000"});
        rect.createPort("hybrid", new CoordinatePortLocator("", 0, 0));
        rect.createPort("hybrid", new CoordinatePortLocator("", 30, 30));
        this.add(rect)
        let led = new ComponentFigure(wokwiComponentByClass[LEDElement.name]);
        this.add(led.setX(100).setY(100))
        let card = new ComponentFigure(wokwiComponentByClass[ArduinoUnoElement.name]);
        this.add(card.setX(200).setY(150))
        let pixel = new ComponentFigure(wokwiComponentByClass[NeoPixelElement.name]);
        this.add(pixel.setX(200).setY(50))
        let dht22 = new ComponentFigure(wokwiComponentByClass[Dht22Element.name]);
        this.add(dht22.setX(250).setY(10))



    }
    private onZoomChange(){
        css(this.overlayContainer, {transform: 'scale(' + 1/this.getZoom() + ')'})
    }
    private onSelectionChange(selected: any){
        if(this.selected != selected){
            if(this.selected instanceof ComponentFigure) this.selected.onUnselected()
            if(selected instanceof ComponentFigure) selected.onSelected();
            this.selected = selected;
        }
    }
    public clear(){
        super.clear()
        this.setZoom(DEFAULT_ZOOM)
    }
}