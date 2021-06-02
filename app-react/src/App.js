import { Hello, CustomBox } from "@jcgalvis/example-library-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomBox
          content="jcgalvis"
          bgColor="yellow"
          color="black"
          width={400}
          height={600}
        />
        <p>
          <Hello name="Juan" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
