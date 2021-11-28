import {
    avrInstruction,
    AVRTimer,
    CPU,
    timer0Config,
    AVRIOPort,
    portBConfig,
    portCConfig,
    portDConfig, timer1Config, timer2Config, AVRUSART, usart0Config
} from "avr8js";
import {MicroTaskScheduler} from "./micro-task-scheduler";

// ATmega328p params
const FLASH = 0x8000;

export class AVRRunner {
    readonly program = new Uint16Array(FLASH);
    readonly cpu: CPU;
    readonly timer0: AVRTimer;
    readonly timer1: AVRTimer;
    readonly timer2: AVRTimer;
    readonly portB: AVRIOPort;
    readonly portC: AVRIOPort;
    readonly portD: AVRIOPort;
    readonly usart: AVRUSART;
    readonly speed = 16e6; // 16 MHZ
    readonly workUnitCycles = 500000;
    readonly taskScheduler = new MicroTaskScheduler();

    constructor(hex: string) {
        const { data } = require('intel-hex').parse(hex)
        this.program = new Uint16Array(new Uint8Array(data).buffer);
        this.cpu = new CPU(this.program);
        this.timer0 = new AVRTimer(this.cpu, timer0Config);
        this.timer1 = new AVRTimer(this.cpu, timer1Config);
        this.timer2 = new AVRTimer(this.cpu, timer2Config);
        this.portB = new AVRIOPort(this.cpu, portBConfig);
        this.portC = new AVRIOPort(this.cpu, portCConfig);
        this.portD = new AVRIOPort(this.cpu, portDConfig);
        this.usart = new AVRUSART(this.cpu, usart0Config, this.speed);
        this.taskScheduler.start();
    }

    execute(callback: (cpu: CPU) => void) {
        const cyclesToRun = this.cpu.cycles + this.workUnitCycles;
        while(this.cpu.cycles < cyclesToRun) {
            avrInstruction(this.cpu);
            this.cpu.tick();
        }

        callback(this.cpu);
        this.taskScheduler.postTask(() => this.execute(callback));
    }

    set pause(pause: boolean){
        if(pause && !this.pause) this.taskScheduler.stop();
        else if(!pause && this.pause){
            this.taskScheduler.start();
            this.execute(() => {})
        }
    }
    get pause(){
        return this.taskScheduler.stopped;
    }
    stop(){
        this.taskScheduler.stop();
    }
}