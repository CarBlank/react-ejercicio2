import { useState } from "react";

const CounterFunc = (props) => {
  const [counterfunc, setCounter] = useState(props.initialValue);
  const incrementplus = () => {
    setCounter(counterfunc + 2);
  };

  const decremento = () => {
    setCounter(counterfunc - 1);
  };

  const increment = () => {
    setCounter(counterfunc + 3);
  };

  return (
    <div>
      <h2>ConunterFunc: {counterfunc}</h2>
      <button onClick={incrementplus}>Boton Incremento </button>
      <button onClick={decremento}>Boton Decremento </button>
      <button onClick={increment}>Boton Incremento 3 </button>
    </div>
  );
};

export default CounterFunc;
