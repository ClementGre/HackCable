import {ElementPin, LEDElement} from "@wokwi/elements";

import * as draw2d from "draw2d";

class CoordinatePortLocator extends draw2d.layout.locator.PortLocator{
    private readonly x: number;
    private readonly y: number;
    constructor(x: number, y: number){
        super();
        this.x = x;
        this.y = y;
    }
    public relocate(index: any, figure: any){
        super.relocate(index, figure)
        //let p = figure.getParent();
        this.applyConsiderRotation(figure, this.x, this.y);
    }
}

class CustomFigure extends draw2d.SVGFigure{

    constructor(){
        super();
        this.index=0;
        this.svgs=[];
        this.overlay = document.createElement('wokwi-led');

        let element: LEDElement = new LEDElement();
        element.pinInfo.forEach((pinInfo: ElementPin) => {
            this.createPort("hybrid", new CoordinatePortLocator(pinInfo.x, pinInfo.y));
        })

        this.setX(100).setY(100)

        this.svgs.push('')

        let editor = document.querySelector('.hackCable-canvas');
        editor?.append(this.overlay)


        this.on('move', () => this.updateCSS())
        this.updateCSS()

        this.overlay = element;
        this.setResizeable(false)

    }
    updateCSS(){
        console.log('content: ', this.overlay)
        css(this.overlay, {
            "position": "absolute",
            "top": this.getY() + 'px',
            "left": this.getX() + 'px',
        });
    }
    getSVG(){
        return '';
    }
}

function css(element: HTMLElement, style: any) {

    Object.keys(style).forEach((key: any) => {
        if(key in element.style)
            element.style[key] = style[key];
    });
}

export class Editor{

    private canvas;

    constructor() {

        //let editor = document.querySelector('.hackCable-canvas')
        const led = document.createElement('wokwi-led');
        if(led instanceof LEDElement){
            led.color = "#002fd9"
            led.lightColor = "#3a66f6"
            led.label = "13"
        }
        //editor?.appendChild(led)

        console.log(document.querySelector('#hackCable-canvas'))
        this.canvas = new draw2d.Canvas('hackCable-canvas');
        this.canvas.on("figure:add", function(){
            console.log("Figure added")
        });
        let circle = new CustomFigure();

        let rect = new draw2d.shape.basic.Rectangle({x:100,y:10, stroke:3, color:"#004b87", bgColor:"#0082b4"});

        rect.createPort("hybrid", new CoordinatePortLocator(0, 0));
        rect.createPort("hybrid", new CoordinatePortLocator(30, 30));

        this.canvas.add(circle)
        this.canvas.add(rect)
    }
}