import draw2d from "draw2d";

export class CoordinatePortLocator extends draw2d.layout.locator.PortLocator{

    public readonly portId: string;
    private readonly x: number;
    private readonly y: number;
    constructor(portId: string, x: number, y: number){
        super();
        this.portId = portId;
        this.x = x;
        this.y = y;
    }
    public relocate(index: any, figure: any){
        super.relocate(index, figure)
        this.applyConsiderRotation(figure, this.x, this.y);
    }


}