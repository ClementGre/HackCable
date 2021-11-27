export interface IHexiResult {
    stdout: string;
    stderr: string;
    hex: string;
}

export async function buildHex(source: string) {
    const resp = await fetch('https://hexi.wokwi.com/build', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sketch: source })
    });
    return (await resp.json()) as IHexiResult;
}