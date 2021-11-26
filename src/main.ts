import "./css.styl"
import * as avr8js from 'avr8js';
import '@wokwi/elements';
import "@wokwi/elements";
import {LEDElement} from "@wokwi/elements";


export class HackCable {

    private led: (LEDElement & Element) | null | undefined;

    mount(mountDiv: HTMLElement): void {
        console.log("Mounting HackCable...")

        mountDiv.innerHTML = require('./ui.html').default
        mountDiv.classList.add("hackCable-root");

        this.led = document.querySelector<LEDElement & Element>('wokwi-led');
    }

    runCode(program: Program): void{

        const cpu = new avr8js.CPU(program.getProgram());
        new avr8js.AVRTimer(cpu, avr8js.timer0Config);
        const portB = new avr8js.AVRIOPort(cpu, avr8js.portBConfig);
        portB.addListener(() => {
            if(this.led != undefined) this.led.value = portB.pinState(5) === avr8js.PinState.High;
        });

        function runCode() {
            for(let i = 0; i < 50000; i++){
                avr8js.avrInstruction(cpu);
                cpu.tick();
            }
            setTimeout(runCode, 0);
        }

        runCode();
    }
}

export class Program {

    private readonly program

    constructor(blink: string){
        this.program = new Uint16Array(16384);

        blink.split(' ').forEach((value, index) => {
            this.program[index] = parseInt(value, 16);
        });
    }

    getProgram(): Uint16Array {
        return this.program;
    }
}