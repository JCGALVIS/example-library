/// <reference types="react" />
declare type HelloProps = {
    name: string;
};
declare const Hello: ({ name }: HelloProps) => JSX.Element;
export default Hello;
