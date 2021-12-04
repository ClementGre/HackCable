import draw2d from "draw2d";
import {ElementPin} from "@wokwi/elements";
import {Component, WokwiComponent} from "../panels/component";
import {CoordinatePortLocator} from "./CoordinatePortLocator";

export class ComponentFigure extends draw2d.shape.basic.Rectangle{

    constructor(component: Component){
        super();
        this.setBackgroundColor(null)
        this.setColor(null)

        let element: WokwiComponent = new component.wokwiComponentClass();
        this.overlay = element;

        element.pinInfo.forEach((pinInfo: ElementPin) => {
            let port = this.createPort("input", new CoordinatePortLocator(pinInfo.x, pinInfo.y));
            port.setVisible(false)
            port.on("connect", () => port.setVisible(false));
            port.on("disconnect", () => port.setVisible(this.isSelected()));
        })

        css(this.overlay, {position: 'absolute', 'transform-origin': 'top left'})
        this.setResizeable(false)

        // EVENTS

        this.on("added", (_emitter: any, event: any) => {
            event.canvas.on("zoom", zoomHandler);
            event.canvas.overlayContainer.append(this.overlay)

            setTimeout(() => {
                let svg = this.overlay.shadowRoot?.querySelector("svg")
                this.setWidth(unitToPx(svg.getAttribute('width')))
                this.setHeight(unitToPx(svg.getAttribute('height')))
            })
        })
        this.on("removed", (_emitter: any, event: any) => {
            event.canvas.off("zoom", zoomHandler);
            this.overlay.remove()
        })
        this.on("change:dimension", (_emitter: any, event: any) => {
            css(this.overlay, {width: event.width, height: event.height})
        })
        this.on("move", (_emitter: any, event: any) => {
            if(this.getCanvas()){
                this.updatePosition(event.x, event.y, this.canvas.getZoom())
            }
        })
        this.on("click", (_emitter: any, _event: any) => {
            this.toFront()
        })
        let zoomHandler = (_emitter: any, event: any) => {
            this.updatePosition(this.getX(), this.getY(), event.value)
        };

    }

    private updatePosition(x: number, y: number, zoom: number){
        css(this.overlay, {top: y/zoom, left: x/zoom, transform: 'scale(' + 1/zoom + ')'})
    }

    public onSelected(){
        this.toFront()
        this.getPorts().each((_index: number, port: any) => port.setVisible(port.getConnections().getSize() == 0))
    }
    public onUnselected(){
        this.getPorts().each((_index: number, port: any) => port.setVisible(false))
    }
    public onDragStart(){
        super.onDragStart();
        this.toFront()
    }
    public toFront(){
        super.toFront()
        this.getCanvas().overlayContainer.append(this.overlay)
    }
}

function unitToPx(value: string): number{
    if(value.endsWith('mm')){
        return parseInt(value.replace('mm', ''), 10) * 3.8
    }else{
        return parseInt(value.replace('mm', ''), 10)
    }
}

function css(element: HTMLElement, style: any) {

    Object.keys(style).forEach((key: any) => {
        if(key in element.style){
            if(typeof style[key] == 'number')
                element.style[key] = style[key] + 'px';
            else element.style[key] = style[key];
        }
    });
}