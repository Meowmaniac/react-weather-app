import "./style.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />
          <p className="coded-by">
            <a href="https://github.com/Meowmaniac/react-weather-app">
              Open source code
            </a>{" "}
            by Kateryna Pavlova
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
