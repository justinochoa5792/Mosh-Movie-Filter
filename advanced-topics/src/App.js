import "./App.css";
import Counter from "./HOC/Counter";
import Movie from "./HOC/Movie";

function App() {
  return (
    <div className="App">
      <Movie id={1} />
      <Counter />
    </div>
  );
}

export default App;
