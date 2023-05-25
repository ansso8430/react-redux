import "./App.css";
import { TestMocking } from "./components/TestMocking.tsx";
import Counter from "./features/counter/Counter";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <div className="App">
      <TestMocking />
      <Counter />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Counter2 />
    </div>
  );
}

export default App;
