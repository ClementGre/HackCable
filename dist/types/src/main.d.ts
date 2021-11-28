import "./ui/css.styl";
import * as avr8js from 'avr8js';
import '@wokwi/elements';
import { Catalog } from "./panels/catalog";
import { EmulatorManager } from "./emulator/emulator-manager";
export { AVRRunner } from "./emulator/avr-runner";
export { EmulatorManager } from './emulator/emulator-manager';
import * as compiler from './emulator/compiler';
export declare type CompileResult = compiler.CompileResult;
export declare class HackCable {
    private editor;
    private readonly led;
    private readonly _emulatorManager;
    private readonly _catalog;
    constructor(mountDiv: HTMLElement);
    get emulatorManager(): EmulatorManager;
    get catalog(): Catalog;
    portDUpdate(portD: avr8js.AVRIOPort): void;
}
