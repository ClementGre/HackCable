import { AnalogJoystickElement, ArduinoMegaElement, ArduinoNanoElement, ArduinoUnoElement, BigSoundSensorElement, BuzzerElement, Dht22Element, DipSwitch8Element, Ds1307Element, ESP32DevkitV1Element, FlameSensorElement, FranzininhoElement, GasSensorElement, HCSR04Element, HeartBeatSensorElement, ILI9341Element, IRReceiverElement, IRRemoteElement, KY040Element, LCD1602Element, LCD2004Element, LedBarGraphElement, LEDElement, LEDRingElement, MembraneKeypadElement, MicrosdCardElement, MPU6050Element, NanoRP2040ConnectElement, NeoPixelElement, NeopixelMatrixElement, NTCTemperatureSensorElement, PhotoresistorSensorElement, PIRMotionSensorElement, PotentiometerElement, PushbuttonElement, ResistorElement, RGBLedElement, RotaryDialerElement, ServoElement, SevenSegmentElement, SlidePotentiometerElement, SlideSwitchElement, SmallSoundSensorElement, SSD1306Element, TiltSwitchElement } from "@wokwi/elements";
export declare type WokwiComponent = SevenSegmentElement | ArduinoUnoElement | LCD1602Element | LEDElement | NeoPixelElement | PushbuttonElement | ResistorElement | MembraneKeypadElement | PotentiometerElement | NeopixelMatrixElement | SSD1306Element | BuzzerElement | RotaryDialerElement | ServoElement | Dht22Element | ArduinoMegaElement | ArduinoNanoElement | Ds1307Element | LEDRingElement | SlideSwitchElement | HCSR04Element | LCD2004Element | AnalogJoystickElement | SlidePotentiometerElement | IRReceiverElement | IRRemoteElement | PIRMotionSensorElement | NTCTemperatureSensorElement | HeartBeatSensorElement | TiltSwitchElement | FlameSensorElement | GasSensorElement | FranzininhoElement | NanoRP2040ConnectElement | SmallSoundSensorElement | BigSoundSensorElement | MPU6050Element | ESP32DevkitV1Element | KY040Element | PhotoresistorSensorElement | RGBLedElement | ILI9341Element | LedBarGraphElement | MicrosdCardElement | DipSwitch8Element;
export declare type WokwiClass = typeof RotaryDialerElement | typeof Dht22Element | typeof IRRemoteElement;
export declare const wokwiComponentClasses: (typeof RotaryDialerElement | typeof Dht22Element | typeof IRRemoteElement)[];
export declare type WokwiComponentInfo = {
    clasz: WokwiClass;
    name: string;
    description: string;
    type: ComponentType;
};
export declare type WokwiComponentsInfo = WokwiComponentInfo[];
export declare enum ComponentType {
    LED = 0,
    MOTOR = 1,
    TRANSMITTER = 2,
    BUTTON = 3,
    SENSOR = 4,
    OTHER = 5
}
export declare const wokwiComponentsInfo: WokwiComponentsInfo;
export declare function initComponent(cInfo: WokwiComponentInfo): Component;
export declare class Component {
    readonly wokwiComponentClass: WokwiClass;
    readonly name: string;
    readonly description: string;
    readonly type: ComponentType;
    constructor(WokwiComponentClass: WokwiClass, name: string, description: string, type: ComponentType);
}
export declare class ComponentElement {
    readonly wokwiComponent: WokwiComponent;
    readonly name: string;
    readonly description: string;
    readonly type: ComponentType;
    constructor(component: Component);
}
export declare const components: Component[];
