import { CssClassData } from "./data/cssClassData";
import { IGenerator } from "./IGenerator";
export declare class GeneratorBase implements IGenerator {
    constructor(name: string);
    name: string;
    postfixValuesMap: Map<string, string[]>;
    cssData: CssClassData[];
    generate(prefix?: string, classes?: string[]): string;
}
