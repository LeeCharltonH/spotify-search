import "./App.scss";
import Header from "./components/header/header";
import Results from "./components/results/results";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Results />
      </header>
    </div>
  );
}

export default App;
