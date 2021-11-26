import "./css.styl";
import '@wokwi/elements';
import "@wokwi/elements";
export declare class HackCable {
    private editor;
    private led;
    mount(mountDiv: HTMLElement): void;
    runCode(program: Program): void;
}
export declare class Program {
    private readonly program;
    constructor(blink: string);
    getProgram(): Uint16Array;
}
