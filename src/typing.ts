
export interface menuProp {
    path: string,
    key: string,
    name: string,
    children?: menuProp[],
    [key: string]: any;
}