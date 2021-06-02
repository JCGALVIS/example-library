/// <reference types="react" />
declare type CustomBoxProps = {
    width: number;
    height: number;
    bgColor: string;
    content: string;
    color: string;
};
declare const CustomBox: (props: CustomBoxProps) => JSX.Element;
export default CustomBox;
