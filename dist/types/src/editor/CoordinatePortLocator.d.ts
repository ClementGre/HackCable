import draw2d from "draw2d";
export declare class CoordinatePortLocator extends draw2d.layout.locator.PortLocator {
    private readonly x;
    private readonly y;
    constructor(x: number, y: number);
    relocate(index: any, figure: any): void;
}
