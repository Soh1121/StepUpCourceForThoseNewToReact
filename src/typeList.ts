/** TypeScriptの基本の型 */

// boolean
// biome-ignore lint:
let bool: boolean = true;

// number 数値
// biome-ignore lint:
let num: number = 0;

// string 文字
// biome-ignore lint:
let str: string = "A";

// Array 配列
// biome-ignore lint:
let arr1: Array<number> = [0, 1, 2];
// biome-ignore lint:
let arr2: number[] = [0, 1, 2];

// tuple
// biome-ignore lint:
let tuple: [number, string] = [0, "A"];

// any
// biome-ignore lint:
let any: any = false;

// void
const funcA = (): void => {
    const test = "TEST";
};

// null
// biome-ignore lint:
let null1: null = null;

// undefined
// biome-ignore lint:
let undefined1: undefined = undefined;

// object
// biome-ignore lint:
let obj1: object = {};
// biome-ignore lint:
let obj2: { id: number, name: string } = {id: 0, name:"A"};
