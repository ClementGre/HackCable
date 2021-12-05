import {Canvas} from "./canvas";

export class Editor{

    private readonly _canvas;

    constructor() {
        this._canvas = new Canvas('hackCable-canvas');
    }

    get canvas(){
        return this._canvas;
    }
}