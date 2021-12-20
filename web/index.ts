import "./css/main.styl"
import {CompileResult, EmulatorManager, HackCable} from "../src/main";

console.log("Running HackCable web interface")

const mountingDiv = document.getElementById('hackCable');
if(!mountingDiv) throw new DOMException("Mounting div not found")

const lang = localStorage.getItem('hackCable-webExample-language');
let hackCable = new HackCable(mountingDiv, lang ? lang : 'fr_fr');

const compileButton = document.getElementById('compile');
const executeButton = document.getElementById('execute');
const stopButton = document.getElementById('stop');
const pauseButton = document.getElementById('pause');
const codeInput = document.getElementById('code-editor');
const hexInput = document.getElementById('code-compiled');

if(compileButton && executeButton && stopButton && pauseButton && codeInput instanceof HTMLTextAreaElement && hexInput instanceof HTMLTextAreaElement){

    const code = localStorage.getItem('hackCable-webExample-inputCode');
    if(code) codeInput.value = code;
    const hex = localStorage.getItem('hackCable-webExample-inputHex');
    if(hex) hexInput.value = hex;

    compileButton.addEventListener("click", () => compile());
    executeButton.addEventListener("click", () => execute());
    stopButton.addEventListener("click", () => hackCable.emulatorManager.stop());
    pauseButton.addEventListener("click", () => {
        hackCable.emulatorManager.setPaused(!hackCable.emulatorManager.isPosed())
    });

    function compile(){
        if(codeInput instanceof HTMLTextAreaElement && hexInput instanceof HTMLTextAreaElement){

            console.log("Compiling...")
            localStorage.setItem('hackCable-webExample-inputCode', codeInput.value);
            hackCable.emulatorManager.compileAndLoadCode(codeInput.value).then(() => {})
            EmulatorManager.compileCode(codeInput.value).then((data: CompileResult) => {
                if(data){
                    console.log("done")
                    hexInput.value = data.hex
                    localStorage.setItem('hackCable-webExample-inputHex', data.hex);
                }
            })
        }

    }
    function execute(){
        hackCable.emulatorManager.stop()
        if(hexInput instanceof HTMLTextAreaElement){
            localStorage.setItem('hackCable-webExample-inputHex', hexInput.value);
            hackCable.emulatorManager.loadCode(hexInput.value)
            hackCable.emulatorManager.run()
        }
    }
}

const save = document.getElementById('save');
const restore = document.getElementById('restore');
if(save && restore){
    save.addEventListener("click", () => {
        const data = hackCable.editor.getEditorSaveData();
        console.log('Saving data:', data)
        localStorage.setItem('savedEditor', JSON.stringify(data));
    });
    restore.addEventListener("click", () => {
        const data = JSON.parse(<string>localStorage.getItem('savedEditor'));
        console.log('Loading data:', data)
        hackCable.editor.loadEditorSaveData(data)
    });
}

// language

const languageEn = document.getElementById('language-en');
const languageFr = document.getElementById('language-fr');

languageEn?.addEventListener("click", () => {
    localStorage.setItem('hackCable-webExample-language', 'en_us');
    location.reload()
});
languageFr?.addEventListener("click", () => {
    console.log("Change lang")
    localStorage.setItem('hackCable-webExample-language', 'fr_fr');
    location.reload()
});



