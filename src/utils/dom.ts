export function css(element: HTMLElement, style: any) {

    Object.keys(style).forEach((key: any) => {
        if (key in element.style) {
            if (typeof style[key] == 'number')
                element.style[key] = style[key] + 'px';
            else element.style[key] = style[key];
        }
    });
}
export function unitToPx(value: string): number{
    if(value.endsWith('mm')){
        return parseInt(value.replace('mm', ''), 10) * 3.8
    }else{
        return parseInt(value.replace('mm', ''), 10)
    }
}