import "./App.jsx";
import Counter from "./components/counter/CounterClass";
import CounterFunc from "./components/counter/CounterFunc";
import Greeting from "./components/greeting/GreetingClass";
import GreetingFunc from "./components/greeting/GreetingFunc";

function App() {
  return (
    <>
      <div className="App">
        <Counter initialValue={0} />
      </div>

      <div className="App">
        <CounterFunc initialValue={1} />
      </div>

      <div className="App">
        <Greeting name="Hola Euralio" />
      </div>

      <div className="App">
        <GreetingFunc name="Hola Euralio" />
      </div>
    </>
  );
}

export default App;
