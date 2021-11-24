import * as avr8js from 'avr8js';
import { loadBlink } from './arduino-blink';
import { LEDElement } from '@wokwi/elements';

export interface Props {
    x: number;
    y: number;
}

export class Value {
    private value = 11
    private props: Props = { x: 10, y: 0 };

    getValue(): number {
        return this.value;
    }

    setValue(value: number): void {
        this.value = value;
    }

    setProps(props: Props) {
        this.props = props;
    }

    getProps(): Props {
        return this.props;
    }
}

const value = new Value();
value.setValue(1000);
value.getValue();

const value1 = new Value()
value1.setProps({ x: 1000, y: 1000 });
value1.getProps();

console.log(value1)
console.log(value.getValue())

export function mount(){

    console.log("Mounting HackCable...")

    const led = document.querySelector<LEDElement & Element>('wokwi-led');
    console.log(led)

    const program = new Uint16Array(16384);
    loadBlink(program);

    const cpu = new avr8js.CPU(program);
    new avr8js.AVRTimer(cpu, avr8js.timer0Config);
    const portB = new avr8js.AVRIOPort(cpu, avr8js.portBConfig);
    portB.addListener(() => {
        if(led != undefined) led.value = portB.pinState(5) === avr8js.PinState.High;
    });

    function runCode() {
        for (let i = 0; i < 50000; i++) {
            avr8js.avrInstruction(cpu);
            cpu.tick();
        }
        setTimeout(runCode, 0);
    }

    runCode();
}