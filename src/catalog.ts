import {
    LEDElement,
    PushbuttonElement,
    RGBLedElement,
    SevenSegmentElement,
    SmallSoundSensorElement
} from "@wokwi/elements";

export class Catalog {

    readonly elements = [new LEDElement(), new RGBLedElement(), new SevenSegmentElement(), new PushbuttonElement(), new SmallSoundSensorElement()]

    private root;
    constructor() {
        const root = document.querySelector(".hackCable-catalog")
        if(root instanceof HTMLDivElement){
            this.root = root;
            this.build();
        }
    }


    build(){
        this.elements.forEach((e) => {
            console.log(e.pinInfo)

            const div = document.createElement('div');
            div.setAttribute("class", "hackCable-catalog-element hackCable-catalog-element-" + e.constructor.name)
            div.innerHTML = "<h3>" + e.constructor.name + "</h3>";
            this.root?.appendChild(div);
            div.appendChild(e);
        })
    }
}