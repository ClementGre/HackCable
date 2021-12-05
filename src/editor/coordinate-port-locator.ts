import draw2d from "draw2d";

export class CoordinatePortLocator extends draw2d.layout.locator.PortLocator{
    private readonly x: number;
    private readonly y: number;
    constructor(x: number, y: number){
        super();
        this.x = x;
        this.y = y;
    }
    public relocate(index: any, figure: any){
        super.relocate(index, figure)
        this.applyConsiderRotation(figure, this.x, this.y);
    }
}