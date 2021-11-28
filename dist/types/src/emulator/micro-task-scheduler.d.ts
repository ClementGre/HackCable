export declare type IMicroTaskCallback = () => void;
export declare class MicroTaskScheduler {
    private readonly channel;
    private executionQueue;
    private _stopped;
    start(): void;
    stop(): void;
    get stopped(): boolean;
    postTask(fn: IMicroTaskCallback): void;
    private handleMessage;
}
