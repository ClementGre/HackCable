import { CompileResult } from "./compiler";
import { HackCable } from "../main";
export declare class EmulatorManager {
    private readonly hackcable;
    constructor(hackcable: HackCable);
    private runner;
    private loadingRunner;
    static compileCode(code: string): Promise<CompileResult>;
    compileAndLoadCode(code: string): Promise<CompileResult>;
    loadCode(hexCode: string): void;
    run(): void;
    setPaused(pause: boolean): void;
    isPosed(): boolean;
    stop(): void;
    private setupHardware;
}
