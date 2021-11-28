export type IMicroTaskCallback = () => void;

export class MicroTaskScheduler {
    private readonly channel = new MessageChannel();
    private executionQueue: Array<IMicroTaskCallback> = [];
    private _stopped = true;

    start() {
        if (this._stopped) {
            this._stopped = false;
            this.channel.port2.onmessage = this.handleMessage;
        }
    }

    stop() {
        this._stopped = true;
        this.executionQueue.splice(0, this.executionQueue.length);
        this.channel.port2.onmessage = null;
    }

    get stopped(){
        return this._stopped;
    }


    postTask(fn: IMicroTaskCallback) {
        if (!this._stopped) {
            this.executionQueue.push(fn);
            this.channel.port1.postMessage(null);
        }
    }

    private handleMessage = () => {
        const executeJob = this.executionQueue.shift();
        if (executeJob !== undefined) {
            executeJob();
        }
    };
}