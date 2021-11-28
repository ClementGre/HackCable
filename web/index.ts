import "./css/main.styl"
import {HackCable} from "../src/main";
import {AVRRunner} from "../src/emulator/avr-runner";
import {compileToHex} from "../src/emulator/compiler";

console.log("Running HackCable web interface")

let hackCable = new HackCable();

const mountingDiv = document.getElementById('hackCable');
if(mountingDiv) hackCable.mount(mountingDiv)


const compileButton = document.getElementById('compile');
const executeButton = document.getElementById('execute');
const stopButton = document.getElementById('stop');
const codeInput = document.getElementById('code-editor');
const hexInput = document.getElementById('code-compiled');



if(compileButton && executeButton && stopButton && codeInput instanceof HTMLTextAreaElement && hexInput instanceof HTMLTextAreaElement){

    const code = localStorage.getItem('hackCable-webExample-inputCode');
    if(code) codeInput.value = code;
    const hex = localStorage.getItem('hackCable-webExample-inputHex');
    if(hex) hexInput.value = hex;

    compileButton.addEventListener("click", () =>  compile());
    executeButton.addEventListener("click", () => execute());
    stopButton.addEventListener("click", () => stop());

    let runner: AVRRunner;

    function compile(){
        if(codeInput instanceof HTMLTextAreaElement && hexInput instanceof HTMLTextAreaElement){

            console.log("Compiling...")
            localStorage.setItem('hackCable-webExample-inputCode', codeInput.value);
            compileToHex(codeInput.value).then((data) => {
                if(data){
                    console.log("done")
                    hexInput.value = data.hex
                    localStorage.setItem('hackCable-webExample-inputHex', data.hex);
                }
            })
        }

    }
    function execute(){
        stop()
        if(hexInput instanceof HTMLTextAreaElement){
            localStorage.setItem('hackCable-webExample-inputHex', hexInput.value);
            runner = new AVRRunner(hexInput.value.replace(/\n\n/g, "\n"));
            hackCable.runCode(runner);
        }
    }
    function stop(){
        if(runner) runner.stop();
    }
}



/*const code = `void setup() {
  // put your setup code here, to run once:
    pinMode(1, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  
  while(true){
    digitalWrite(1, HIGH);
    delay(1000);
    digitalWrite(1, LOW);
    delay(1000);
  }

}`*/



