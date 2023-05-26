import "./App.css";
import { TestMocking } from "./components/TestMocking.tsx";
import Counter from "./features/counter/Counter";
import Counter2 from "./components/Counter2";
import { RecoilRoot } from "recoil";
import { FontButton } from "./components/RecoilExample/FontButton.jsx";
import { Text } from "./components/RecoilExample/Text.jsx";
import { CharacterCounter } from "./components/RecoilExample/CharactorCounter";
import { TodoList } from "./components/RecoilExample/Todo/TodoList";

function App() {
  return (
    <div className="App">
      {/* <TestMocking />
      <Counter />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Counter2 /> */}
      <RecoilRoot>
        {/* <FontButton />
        <Text />
        <CharacterCounter /> */}
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
