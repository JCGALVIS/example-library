import React from "react";

type CustomBoxProps = {
  width: number;
  height: number;
  bgColor: string;
  content: string;
  color: string;
};

const CustomBox = (props: CustomBoxProps) => {
  const { width, height, bgColor, content = "Texto de ejemplo", color } = props;

  return (
    <div
      style={{
        width: width || 200,
        height: height || 200,
        backgroundColor: bgColor || "green",
        color: color || "white",
      }}
    >
      {content}
    </div>
  );
};

export default CustomBox;
