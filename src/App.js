import "./App.css";
import TheGame from "./Game";

function App() {
  return (
    <div className="App">
      <div className="Container">
      <header className="App-header">
        <div className="header-container">
          <h1>Rock - Paper - Scissors</h1>
        </div>
      </header>
      <main className="App-main">
        <TheGame></TheGame>
      </main>
    </div>
    </div>
  );
}

export default App;
