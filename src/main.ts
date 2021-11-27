import "./css.styl"
import * as avr8js from 'avr8js';
import '@wokwi/elements';
import {LEDElement} from "@wokwi/elements";
import {Catalog} from "./catalog";
import {AVRRunner} from "./execute";

export class HackCable {

    private editor: Element | null | undefined;
    private led: LEDElement | undefined;

    mount(mountDiv: HTMLElement): void {
        console.log("Mounting HackCable...")

        mountDiv.innerHTML = require('./ui.html').default
        mountDiv.classList.add("hackCable-root");

        this.editor = document.querySelector('.hackCable-editor')

        const led = document.createElement('wokwi-led');
        if(led instanceof LEDElement){
            this.led = led;
            led.color = "#002fd9"
            led.lightColor = "#3a66f6"
            led.label = "13"
            this.editor?.appendChild(this.led);
        }

        new Catalog();


    }

    runCode(runner: AVRRunner): void{

        runner.execute(() => {});

        runner.portD.addListener(() => {
            console.log("listener called: ", runner.portD.pinState(1))
            if(this.led != undefined) this.led.value = runner.portD.pinState(1) === avr8js.PinState.High;
        });

    }
}