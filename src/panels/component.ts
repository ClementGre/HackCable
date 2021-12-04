import {
    AnalogJoystickElement, ArduinoMegaElement,
    ArduinoNanoElement,
    ArduinoUnoElement,
    BigSoundSensorElement,
    BuzzerElement,
    Dht22Element, DipSwitch8Element,
    Ds1307Element,
    ESP32DevkitV1Element, FlameSensorElement,
    FranzininhoElement, GasSensorElement,
    HCSR04Element,
    HeartBeatSensorElement,
    ILI9341Element,
    IRReceiverElement, IRRemoteElement,
    KY040Element,
    LCD1602Element, LCD2004Element, LedBarGraphElement, LEDElement,
    LEDRingElement, MembraneKeypadElement,
    MicrosdCardElement, MPU6050Element,
    NanoRP2040ConnectElement,
    NeoPixelElement,
    NeopixelMatrixElement, NTCTemperatureSensorElement, PhotoresistorSensorElement,
    PIRMotionSensorElement,
    PotentiometerElement,
    PushbuttonElement,
    ResistorElement, RGBLedElement,
    RotaryDialerElement,
    ServoElement, SevenSegmentElement, SlidePotentiometerElement,
    SlideSwitchElement,
    SmallSoundSensorElement, SSD1306Element,
    TiltSwitchElement
} from "@wokwi/elements";

export declare type WokwiComponent = SevenSegmentElement | ArduinoUnoElement | LCD1602Element | LEDElement | NeoPixelElement | PushbuttonElement | ResistorElement | MembraneKeypadElement | PotentiometerElement | NeopixelMatrixElement | SSD1306Element | BuzzerElement | RotaryDialerElement | ServoElement | Dht22Element | ArduinoMegaElement | ArduinoNanoElement | Ds1307Element | LEDRingElement | SlideSwitchElement | HCSR04Element | LCD2004Element | AnalogJoystickElement | SlidePotentiometerElement | IRReceiverElement | IRRemoteElement | PIRMotionSensorElement | NTCTemperatureSensorElement | HeartBeatSensorElement | TiltSwitchElement | FlameSensorElement | GasSensorElement | FranzininhoElement | NanoRP2040ConnectElement | SmallSoundSensorElement | BigSoundSensorElement | MPU6050Element | ESP32DevkitV1Element | KY040Element | PhotoresistorSensorElement | RGBLedElement | ILI9341Element | LedBarGraphElement | MicrosdCardElement | DipSwitch8Element

export declare type WokwiClass = typeof Dht22Element;

export const wokwiComponentClasses = [SevenSegmentElement, ArduinoUnoElement, LCD1602Element, LEDElement, NeoPixelElement, PushbuttonElement, ResistorElement, MembraneKeypadElement, PotentiometerElement, NeopixelMatrixElement, SSD1306Element, BuzzerElement, RotaryDialerElement, ServoElement, Dht22Element, ArduinoMegaElement, ArduinoNanoElement, Ds1307Element, LEDRingElement, SlideSwitchElement, HCSR04Element, LCD2004Element, AnalogJoystickElement, SlidePotentiometerElement, IRReceiverElement, IRRemoteElement,  PIRMotionSensorElement, NTCTemperatureSensorElement, HeartBeatSensorElement, TiltSwitchElement, FlameSensorElement, GasSensorElement, FranzininhoElement, NanoRP2040ConnectElement, SmallSoundSensorElement, BigSoundSensorElement, MPU6050Element, ESP32DevkitV1Element, KY040Element, PhotoresistorSensorElement, RGBLedElement, ILI9341Element, LedBarGraphElement, MicrosdCardElement, DipSwitch8Element]

export declare type WokwiComponentInfo = {clasz: WokwiClass, name: string, description: string, type: ComponentType}
export declare type WokwiComponentsInfo = WokwiComponentInfo[]

export enum ComponentType {
    LED,
    MOTOR,
    TRANSMITTER,
    BUTTON,
    SENSOR,
    OTHER
}

export const wokwiComponentsInfo: WokwiComponentsInfo = [
    {
        clasz: LEDElement,
        name: "LED",
        description: "Diode Électroluminescente",
        type: ComponentType.LED
    },{
        clasz: RGBLedElement,
        name: "LED RGB",
        description: "Diode Électroluminescente de couleur contrôllable",
        type: ComponentType.LED
    },{
        clasz: LedBarGraphElement,
        name: "Barre de LEDs",
        description: "Barre de 10 diodes électroluminescentes",
        type: ComponentType.LED
    },{
        clasz: NeoPixelElement,
        name: "Pixel",
        description: "Diode Électroluminescente",
        type: ComponentType.LED
    },{
        clasz: SevenSegmentElement,
        name: "Numitrons",
        description: "Peut afficher un chiffre ou une lettre",
        type: ComponentType.LED
    },{
        clasz: LEDRingElement,
        name: "LED Ring",
        description: "Anneau de Leds",
        type: ComponentType.LED
    },{
        clasz: LCD1602Element,
        name: "Écran 2*16 caractères",
        description: "Peut afficher du texte (Jusqu'à 32 caractères sur 2 lignes)",
        type: ComponentType.LED
    },{
        clasz: LCD2004Element,
        name: "Écran 4*20 caractères",
        description: "Peut afficher du texte (Jusqu'à 80 caractères sur 4 lignes)",
        type: ComponentType.LED
    },{
        clasz: BuzzerElement,
        name: "Buzzer",
        description: "Haut parleur",
        type: ComponentType.TRANSMITTER
    },{
        clasz: PushbuttonElement,
        name: "Bouton poussoir",
        description: "",
        type: ComponentType.BUTTON
    },{
        clasz: PotentiometerElement,
        name: "Potentiomètre",
        description: "Résistance variable",
        type: ComponentType.BUTTON
    },{
        clasz: SlideSwitchElement,
        name: "Slide switch",
        description: "Interrupteur",
        type: ComponentType.BUTTON
    },{
        clasz: AnalogJoystickElement,
        name: "Joystick",
        description: "",
        type: ComponentType.BUTTON
    },{
        clasz: SlidePotentiometerElement,
        name: "Potentiomètre",
        description: "Résistance variable",
        type: ComponentType.BUTTON
    },{
        clasz: DipSwitch8Element,
        name: "DipSwitch8",
        description: "Barre de 8 interrupteurs",
        type: ComponentType.BUTTON
    },{
        clasz: Dht22Element,
        name: "DHT22 (T° et φ)",
        description: "Capteur de température et d'humidité",
        type: ComponentType.SENSOR
    },{
        clasz: HCSR04Element,
        name: "HCSR04",
        description: "Détecteur de proximité",
        type: ComponentType.SENSOR
    },{
        clasz: NTCTemperatureSensorElement,
        name: "Temperature sensor",
        description: "",
        type: ComponentType.SENSOR
    },{
        clasz: SmallSoundSensorElement,
        name: "Détecteur de son faible",
        description: "",
        type: ComponentType.SENSOR
    },{
        clasz: BigSoundSensorElement,
        name: "Détecteur de son fort",
        description: "",
        type: ComponentType.SENSOR
    },{
        clasz: ServoElement,
        name: "Servo moteur",
        description: "Moteur de précision (angle de rotation controllable)",
        type: ComponentType.MOTOR
    },{
        clasz: KY040Element,
        name: "Potentiometre KY040",
        description: "Résistance variable",
        type: ComponentType.BUTTON
    },{
        clasz: PhotoresistorSensorElement,
        name: "Photoresistance",
        description: "Capteur de lumière",
        type: ComponentType.SENSOR
    },{
        clasz: ResistorElement,
        name: "Résistance",
        description: "",
        type: ComponentType.OTHER
    },{
        clasz: Ds1307Element,
        name: "Ds1307 (Horloge)",
        description: "",
        type: ComponentType.OTHER
    }]



export class Component {

    public readonly wokwiComponentClass: WokwiClass
    public readonly name: string
    public readonly description: string
    public readonly type: ComponentType

    constructor(WokwiComponentClass: WokwiClass, name: string, description: string, type: ComponentType) {
        this.wokwiComponentClass = WokwiComponentClass;
        this.name = name;
        this.description = description;
        this.type = type
    }

}
export class ComponentElement {

    public readonly wokwiComponent: WokwiComponent
    public readonly name: string
    public readonly description: string
    public readonly type: ComponentType

    constructor(component: Component) {
        this.wokwiComponent = new component.wokwiComponentClass();
        this.name = component.name;
        this.description = component.description;
        this.type = component.type
    }

}

export const components: Component[] = []
for(let wokwiComponentInfo of wokwiComponentsInfo){
    components.push(initComponent(wokwiComponentInfo));
}
export function initComponent(cInfo: WokwiComponentInfo){
    return new Component(cInfo.clasz, cInfo.name, cInfo.description, cInfo.type);
}