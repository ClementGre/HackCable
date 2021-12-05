import draw2d from "draw2d";
import {ElementPin} from "@wokwi/elements";
import {Component, WokwiComponent} from "../panels/component";
import {CoordinatePortLocator} from "./coordinate-port-locator";
import {css, unitToPx} from "../utils/dom";

export class ComponentFigure extends draw2d.shape.basic.Rectangle{

    constructor(component: Component){
        super();

        this.setBackgroundColor(null)
        this.setColor(null)
        this.setResizeable(false)
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        // Load wokwi component into overlay
        let element: WokwiComponent = new component.wokwiComponentClass();
        this.overlay = element;

        element.pinInfo.forEach((pinInfo: ElementPin) => {
            let port = this.createPort("hybrid", new CoordinatePortLocator(pinInfo.x, pinInfo.y));
            port.setAlpha(.7)
            port.setBackgroundColor('#424B5A')
            port.setDiameter(7)
            port.on("connect", () => port.setVisible(false));
            port.on("disconnect", () => port.setVisible(true));
        })


        // Listeners
        this.on("added", (_emitter: any, event: any) => {
            event.canvas.overlayContainer.append(this.overlay)

            setTimeout(() => {
                let svg = this.overlay.shadowRoot?.querySelector("svg")
                this.setWidth(unitToPx(svg.getAttribute('width')))
                this.setHeight(unitToPx(svg.getAttribute('height')))
            })
        })
        this.on("removed", (_emitter: any, _event: any) => {
            this.overlay.remove()
        })
        this.on("move", (_emitter: any, event: any) => {
            css(this.overlay, {top: event.y, left: event.x})
        })
        this.on("click", (_emitter: any, _event: any) => {
            this.toFront()
        })
    }

    public onSelected(){
        this.toFront()
    }
    public onUnselected(){

    }
    public toFront(){
        super.toFront()
        this.getCanvas().overlayContainer.append(this.overlay)
    }
}