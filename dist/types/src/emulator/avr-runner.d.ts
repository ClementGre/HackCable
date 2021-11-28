import { AVRTimer, CPU, AVRIOPort, AVRUSART } from "avr8js";
import { MicroTaskScheduler } from "./micro-task-scheduler";
export declare class AVRRunner {
    readonly program: Uint16Array;
    readonly cpu: CPU;
    readonly timer0: AVRTimer;
    readonly timer1: AVRTimer;
    readonly timer2: AVRTimer;
    readonly portB: AVRIOPort;
    readonly portC: AVRIOPort;
    readonly portD: AVRIOPort;
    readonly usart: AVRUSART;
    readonly speed = 16000000;
    readonly workUnitCycles = 500000;
    readonly taskScheduler: MicroTaskScheduler;
    constructor(hex: string);
    execute(callback: (cpu: CPU) => void): void;
    set pause(pause: boolean);
    get pause(): boolean;
    stop(): void;
}
