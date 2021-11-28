export interface CompileResult {
    stdout: string;
    stderr: string;
    hex: string;
}
export declare function compileToHex(source: string): Promise<CompileResult>;
