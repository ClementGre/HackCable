import draw2d from "draw2d";
import { Component } from "../panels/component";
export declare class ComponentFigure extends draw2d.shape.basic.Rectangle {
    constructor(component: Component);
    private updatePosition;
    onSelected(): void;
    onUnselected(): void;
    onDragStart(): void;
    toFront(): void;
}
