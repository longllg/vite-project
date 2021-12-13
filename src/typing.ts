export interface menuProp {
  path: string;
  key: string;
  name: string;
  hidden?: boolean;
  children?: menuProp[];
  [key: string]: any;
}
