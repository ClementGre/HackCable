import "./ui/css.styl";
import '@wokwi/elements';
import { AVRRunner } from "./emulator/avr-runner";
export { AVRRunner } from "./emulator/avr-runner";
export { compileToHex, CompileResult } from "./emulator/compiler";
export declare class HackCable {
    private editor;
    private led;
    mount(mountDiv: HTMLElement): void;
    runCode(runner: AVRRunner): void;
}
