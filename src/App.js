// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Lotti from "./components/Lotti";
import PdfPage from "./components/PdfPage";
import Stopwatch from "./components/Refs";
import DataTables from "./components/DataTables";
import routes from "./routes";
import { lib } from "crypto-js";
// import LocalStore from "./components/LocalStore";

function App() {
  console.log(routes);
  return (
    <div className="App">
      {/* <DataTables /> */}
      {/* <LocalStore /> */}
      {/* <Stopwatch /> */}
      {/* <PdfPage /> */}
      {/* <Lotti /> */}
      {/* {routes.map((i) => {
        console.log(i.url);
      })} */}

      <BrowserRouter>
        <ul className="ul-style">
          {routes.map((route) => (
            <li className="li-style">
              <Link to={route.url}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.url}
              key={route.name}
              element={route.components}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
