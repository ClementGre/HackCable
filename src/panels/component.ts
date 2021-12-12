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

export declare type WokwiComponentInfo = {id: number, clasz: WokwiClass, name: string, description: string, type: ComponentType}
export declare type WokwiComponents = WokwiComponentInfo[]
export declare type WokwiComponentById = {[id: number]: WokwiComponentInfo}
export declare type WokwiComponentByClass = {[clasz: string]: WokwiComponentInfo}

export enum ComponentType {
    LED,
    MOTOR,
    TRANSMITTER,
    BUTTON,
    SENSOR,
    OTHER,
    CARD
}

export const wokwiComponents: WokwiComponents = [
    {
        id: 0,
        clasz: ArduinoUnoElement,
        name: "Arduino Uno",
        description: "Carte Arduino Uno",
        type: ComponentType.CARD
    },{
        id: 1,
        clasz: LEDElement,
        name: "LED",
        description: "Diode Électroluminescente",
        type: ComponentType.LED
    },{
        id: 2,
        clasz: RGBLedElement,
        name: "LED RGB",
        description: "Diode Électroluminescente de couleur contrôllable",
        type: ComponentType.LED
    },{
        id: 3,
        clasz: LedBarGraphElement,
        name: "Barre de LEDs",
        description: "Barre de 10 diodes électroluminescentes",
        type: ComponentType.LED
    },{
        id: 4,
        clasz: NeoPixelElement,
        name: "Pixel",
        description: "Diode Électroluminescente",
        type: ComponentType.LED
    },{
        id: 5,
        clasz: SevenSegmentElement,
        name: "Numitrons",
        description: "Peut afficher un chiffre ou une lettre",
        type: ComponentType.LED
    },{
        id: 6,
        clasz: LEDRingElement,
        name: "LED Ring",
        description: "Anneau de Leds",
        type: ComponentType.LED
    },{
        id: 7,
        clasz: LCD1602Element,
        name: "Écran 2*16 caractères",
        description: "Peut afficher du texte (Jusqu'à 32 caractères sur 2 lignes)",
        type: ComponentType.LED
    },{
        id: 8,
        clasz: LCD2004Element,
        name: "Écran 4*20 caractères",
        description: "Peut afficher du texte (Jusqu'à 80 caractères sur 4 lignes)",
        type: ComponentType.LED
    },{
        id: 9,
        clasz: BuzzerElement,
        name: "Buzzer",
        description: "Haut parleur",
        type: ComponentType.TRANSMITTER
    },{
        id: 10,
        clasz: PushbuttonElement,
        name: "Bouton poussoir",
        description: "",
        type: ComponentType.BUTTON
    },{
        id: 11,
        clasz: PotentiometerElement,
        name: "Potentiomètre",
        description: "Résistance variable",
        type: ComponentType.BUTTON
    },{
        id: 12,
        clasz: SlideSwitchElement,
        name: "Slide switch",
        description: "Interrupteur",
        type: ComponentType.BUTTON
    },{
        id: 13,
        clasz: AnalogJoystickElement,
        name: "Joystick",
        description: "",
        type: ComponentType.BUTTON
    },{
        id: 14,
        clasz: SlidePotentiometerElement,
        name: "Potentiomètre",
        description: "Résistance variable",
        type: ComponentType.BUTTON
    },{
        id: 15,
        clasz: DipSwitch8Element,
        name: "DipSwitch8",
        description: "Barre de 8 interrupteurs",
        type: ComponentType.BUTTON
    },{
        id: 16,
        clasz: Dht22Element,
        name: "DHT22 (T° et φ)",
        description: "Capteur de température et d'humidité",
        type: ComponentType.SENSOR
    },{
        id: 17,
        clasz: HCSR04Element,
        name: "HCSR04",
        description: "Détecteur de proximité",
        type: ComponentType.SENSOR
    },{
        id: 18,
        clasz: NTCTemperatureSensorElement,
        name: "Temperature sensor",
        description: "",
        type: ComponentType.SENSOR
    },{
        id: 19,
        clasz: SmallSoundSensorElement,
        name: "Détecteur de son faible",
        description: "",
        type: ComponentType.SENSOR
    },{
        id: 20,
        clasz: BigSoundSensorElement,
        name: "Détecteur de son fort",
        description: "",
        type: ComponentType.SENSOR
    },{
        id: 21,
        clasz: ServoElement,
        name: "Servo moteur",
        description: "Moteur de précision (angle de rotation controllable)",
        type: ComponentType.MOTOR
    },{
        id: 22,
        clasz: KY040Element,
        name: "Potentiometre KY040",
        description: "Résistance variable",
        type: ComponentType.BUTTON
    },{
        id: 23,
        clasz: PhotoresistorSensorElement,
        name: "Photoresistance",
        description: "Capteur de lumière",
        type: ComponentType.SENSOR
    },{
        id: 24,
        clasz: ResistorElement,
        name: "Résistance",
        description: "",
        type: ComponentType.OTHER
    },{
        id: 25,
        clasz: Ds1307Element,
        name: "Ds1307 (Horloge)",
        description: "",
        type: ComponentType.OTHER
    }]

export let wokwiComponentById: WokwiComponentById = {};
export let wokwiComponentByClass: WokwiComponentByClass = {};
for(let component of wokwiComponents){
    wokwiComponentById[component.id] = component;
    wokwiComponentByClass[component.clasz.name] = component;
}


export class ComponentElement {

    public readonly componentId: number;
    public readonly wokwiComponent: WokwiComponent
    public readonly name: string
    public readonly description: string
    public readonly type: ComponentType

    constructor(component: WokwiComponentInfo) {
        this.componentId = component.id;
        this.wokwiComponent = new component.clasz();
        this.name = component.name;
        this.description = component.description;
        this.type = component.type
    }

}