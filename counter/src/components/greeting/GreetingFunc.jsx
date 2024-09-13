import React, { useEffect, useState } from "react";

const GreetingFun = (props) => {
  const [nameFunc, setName] = useState(props.name);
  useEffect(() => {
    setTimeout(() => {
      setName("Hola Alfonsina");
    }, 3000);
  }, []);

  return (
    <div>
      <p>MensajeFunc: {nameFunc}</p>
    </div>
  );
};

export default GreetingFun;
