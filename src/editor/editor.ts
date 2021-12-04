import {ArduinoUnoElement, LEDElement} from "@wokwi/elements";

import * as draw2d from "draw2d";
import {CoordinatePortLocator} from "./CoordinatePortLocator";
import {ComponentFigure} from "./ComponentFigure";
import {Component, ComponentType} from "../panels/component";

export class Editor{

    private readonly _canvas;

    constructor() {
        this._canvas = new MyCanvas('hackCable-canvas');
    }

    get canvas(){
        return this._canvas;
    }
}

class MyCanvas extends draw2d.Canvas{

    private selected: any = null;

    constructor(divId: string){
        super(divId);

        this.overlayContainer = document.querySelector('.hackCable-canvas-overlay-container');
        this.html.prepend(this.overlayContainer);

        /*this.on("figure:add", function(){
            console.log("Figure added")
        });*/

        let rect = new draw2d.shape.basic.Rectangle({x: 100, y: 10, stroke: 3, color: "#9e0000", bgColor: "#cd0000"});
        rect.createPort("hybrid", new CoordinatePortLocator(0, 0));
        rect.createPort("hybrid", new CoordinatePortLocator(30, 30));
        this.add(rect)

        let led = new ComponentFigure(new Component(LEDElement, '', '', ComponentType.LED));
        led.setX(100).setY(100)
        this.add(led)

        let card = new ComponentFigure(new Component(ArduinoUnoElement, '', '', ComponentType.OTHER));
        card.setX(200).setY(100)
        this.add(card)

        this.on("select", (_emitter: any, event: any) => {
            if(event.figure == null || this.selected != event.figure && event.figure instanceof ComponentFigure){
                this.selected?.onUnselected()
                event.figure?.onSelected();
                this.selected = event.figure;
            }
        });

        // Mandatory to prevent shifted selection & clicks
        this.installEditPolicy(new draw2d.policy.canvas.PanningSelectionPolicy());
        this.setScrollArea(document.querySelector('.hackCable-canvas'))

        // Listeners


    }
}