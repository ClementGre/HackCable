import {LEDElement} from "@wokwi/elements";

import * as draw2d from "draw2d";

export class Editor{

    private canvas;

    constructor() {

        let editor = document.querySelector('.hackCable-canvas')
        const led = document.createElement('wokwi-led');
        if(led instanceof LEDElement){
            led.color = "#002fd9"
            led.lightColor = "#3a66f6"
            led.label = "13"
            editor?.appendChild(led);
        }

        console.log(document.querySelector('#hackCable-canvas'))
        this.canvas = new draw2d.Canvas('hackCable-canvas');
        this.canvas.on("figure:add", function(){
            console.log("Figure added")
        });
        let circle = new draw2d.shape.basic.Circle({x:40,y:10, stroke:3, color:"#3d3d3d", bgColor:"#3dff3d"});
        circle.createPort("input")
        circle.createPort("output")

        let rect = new draw2d.shape.basic.Rectangle({x:100,y:10, stroke:3, color:"#004b87", bgColor:"#0082b4"});
        rect.createPort("input")
        rect.createPort("output")
        const locator = new draw2d.layout.locator.Locator()
        rect.createPort("output", locator)
        locator.relocate({x: 20, y: 30}, rect)


        this.canvas.add(circle)
        this.canvas.add(rect)
    }
}