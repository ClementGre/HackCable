import * as draw2d from "draw2d";
export declare class Editor {
    private readonly _canvas;
    constructor();
    get canvas(): MyCanvas;
}
declare class MyCanvas extends draw2d.Canvas {
    private selected;
    constructor(divId: string);
}
export {};
