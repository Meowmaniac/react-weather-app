import logo from "./logo.svg";
import "./style.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>
      </head>
      <div className="container">
        <div className="weather-app">
          <Search />
          <p class="coded-by">
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
