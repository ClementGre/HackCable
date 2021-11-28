import {AVRRunner} from "./avr-runner";
import {CompileResult, compileToHex} from "./compiler";
import {HackCable} from "../main";

export class EmulatorManager{

    private readonly hackcable: HackCable;
    constructor(hackcable: HackCable) {
        this.hackcable = hackcable;
    }

    private runner: AVRRunner | undefined;
    private loadingRunner: AVRRunner | undefined;


    static async compileCode(code: string): Promise<CompileResult>{
        return compileToHex(code);
    }
    async compileAndLoadCode(code: string): Promise<CompileResult>{
        const data = await compileToHex(code);
        console.log(data)
        this.loadCode(data.hex);
        return data;
    }
    loadCode(hexCode: string){
        this.loadingRunner = new AVRRunner(hexCode.replace(/\n\n/g, "\n"));
    }
    run(){
        stop();
        this.runner = this.loadingRunner;
        this.setupHardware();
        // Callback called every 500 000 cpu cycles
        this.runner?.execute(() => {});
    }


    setPaused(pause: boolean){
        if(this.runner) this.runner.pause = pause;
    }
    isPosed(){
        if(this.runner) return this.runner.pause;
        return true;
    }
    stop(){
        if(this.runner) this.runner.stop();
    }


    private setupHardware(){
        if(!this.runner) throw new Error("Runner mustn't be null!")
        this.runner.portD.addListener(() => {
            if(this.runner) this.hackcable.portDUpdate(this.runner.portD)
        });
    }
}

