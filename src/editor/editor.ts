import {Canvas} from "./canvas";
import {ComponentFigure, FigureData, WiringData} from "./component-figure";
import {wokwiComponentById} from "../panels/component";
import {Port} from "draw2d-types";
import {VertexClickConnectionPolicy} from "./connections-policies";

export declare type EditorSaveData = {figures: FigureData[], connections: WiringData[]}

export class Editor{

    private readonly _canvas;

    constructor() {
        this._canvas = new Canvas('hackCable-canvas');
    }

    public getEditorSaveData(): EditorSaveData{

        let data: EditorSaveData = {figures: [], connections: []};

        this._canvas.getFigures().data.forEach((figure: any) => {
            if(figure instanceof ComponentFigure){
                data.figures.push(figure.getFigureData());
                data.connections.push(...figure.getWiringData())
            }
        });
        return data;
    }
    public loadEditorSaveData(data: EditorSaveData){
        this._canvas.clear()

        data.figures.forEach((figureData) => {
            let figure = new ComponentFigure(wokwiComponentById[figureData.componentId]);
            figure.setId(figureData.figureId) // So the connections can find this figure
            this._canvas.add(figure.setX(figureData.x).setY(figureData.y))
        })
        data.connections.forEach((connectionData) => {
            const sourceFigure: ComponentFigure = this._canvas.getFigure(connectionData.fromFigure)
            const targetFigure: ComponentFigure = this._canvas.getFigure(connectionData.targetFigure)
            if(sourceFigure && targetFigure){
                const sourcePort: Port = sourceFigure.getPortByName(connectionData.fromPortName)
                const targetPort: Port = targetFigure.getPortByName(connectionData.targetPortName)
                if(sourcePort && targetPort){
                    console.log(sourcePort, '->', targetPort)
                    let connection = new VertexClickConnectionPolicy().createConnection();
                    console.log(connection)
                    connection.setCanvas(this._canvas)
                    connection.setSource(sourcePort)
                    connection.setTarget(targetPort)
                    connection.setVertices(connectionData.svgPath)
                }
            }
        })
    }

    get canvas(){
        return this._canvas;
    }
}