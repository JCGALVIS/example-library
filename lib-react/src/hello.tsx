import React from "react";

type HelloProps = {
  name: string;
};

const Hello = ({ name = "Mundo" }: HelloProps) => {
  return <h1>Hola {name}</h1>;
};

export default Hello;
