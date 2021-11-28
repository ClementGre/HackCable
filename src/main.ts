import "./ui/css.styl"
import * as avr8js from 'avr8js';
import '@wokwi/elements';
import {LEDElement} from "@wokwi/elements";
import {Catalog} from "./panels/catalog";
import {EmulatorManager} from "./emulator/emulator-manager";

export {AVRRunner} from "./emulator/avr-runner";
export {EmulatorManager} from './emulator/emulator-manager';
import * as compiler from './emulator/compiler';
export type CompileResult = compiler.CompileResult;

export class HackCable {

    private editor: Element | null | undefined;
    private readonly led: LEDElement | undefined;

    private readonly _emulatorManager: EmulatorManager;
    private readonly _catalog: Catalog;

    constructor(mountDiv: HTMLElement){
        console.log("Mounting HackCable...")

        mountDiv.innerHTML = require('./ui/ui.html').default
        mountDiv.classList.add("hackCable-root");

        this.editor = document.querySelector('.hackCable-editor')
        this._catalog = new Catalog()
        this._emulatorManager = new EmulatorManager(this);

        const led = document.createElement('wokwi-led');
        if(led instanceof LEDElement){
            this.led = led;
            led.color = "#002fd9"
            led.lightColor = "#3a66f6"
            led.label = "13"
            this.editor?.appendChild(this.led);
        }

    }

    public get emulatorManager(){
        return this._emulatorManager;
    }
    public get catalog(){
        return this._catalog;
    }

    public portDUpdate(portD: avr8js.AVRIOPort) {
        if(this.led != undefined) this.led.value = portD.pinState(1) === avr8js.PinState.High;
    }
}