import "./ui/css.styl"
import * as avr8js from 'avr8js';
import '@wokwi/elements';
import {LEDElement} from "@wokwi/elements";
import {Catalog} from "./panels/catalog";
import {EmulatorManager} from "./emulator/emulator-manager";

export {AVRRunner} from "./emulator/avr-runner";
export {EmulatorManager} from './emulator/emulator-manager';
import * as compiler from './emulator/compiler';
import {Editor} from "./editor/editor";
import i18next, {TFunction} from "i18next";
import {loadTranslations} from "./ui/i18n/i18n-loader";
export type CompileResult = compiler.CompileResult;

// Draw2D deps
require('webpack-jquery-ui');
require('webpack-jquery-ui/draggable');

export class HackCable {

    public debug: boolean = process.env.NODE_ENV === "development";
    private readonly led: LEDElement | undefined;

    private readonly _emulatorManager: EmulatorManager;
    private readonly _catalog: Catalog;
    private readonly _editor: Editor;

    constructor(mountDiv: HTMLElement, language = 'en_us'){
        console.log("Mounting HackCable...")

        this.loadI18N(language)

        // Load HTML
        mountDiv.innerHTML = require('./ui/ui.html').default
        mountDiv.classList.add("hackCable-root");

        // Init classes
        this._catalog = new Catalog()
        this._emulatorManager = new EmulatorManager(this);
        this._editor = new Editor();

        console.log(i18next.t('wokwiComponents.arduinoUno.description'))
    }

    private loadI18N(language: string) {
        i18next.init({
            lng: language, // if you're using a language detector, do not define the lng option
            fallbackLng: ['fr', 'en'],
            defaultNS: 'common',
            debug: this.debug,
            resources: {}
        });
        loadTranslations();
    }
    public changeLanguage(language: string): Promise<TFunction>{
        return i18next.changeLanguage(language)
    }
    public getLanguage() {
        return i18next.language;
    }

    public get emulatorManager(){
        return this._emulatorManager;
    }
    public get catalog(){
        return this._catalog;
    }
    public get editor(){
        return this._editor;
    }

    public portDUpdate(portD: avr8js.AVRIOPort) {
        if(this.led != undefined) this.led.value = portD.pinState(1) === avr8js.PinState.High;
    }
}
