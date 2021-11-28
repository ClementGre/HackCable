import { ComponentElement } from "./component";
export declare class Catalog {
    readonly elements: ComponentElement[];
    private readonly catalog;
    private readonly sorter;
    constructor();
    build(): void;
    updateCatalogList(): void;
}
