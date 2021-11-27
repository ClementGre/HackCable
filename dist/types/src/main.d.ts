import "./css.styl";
import '@wokwi/elements';
import { AVRRunner } from "./execute";
export declare class HackCable {
    private editor;
    private led;
    mount(mountDiv: HTMLElement): void;
    runCode(runner: AVRRunner): void;
}
