// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import routes from "./routes";

// import LocalStore from "./components/LocalStore";

function App() {
  console.log(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-style">
          {routes.map((route) => (
            <div className="dropdown">
              <Link className="dropbtn" to={route.url} key={route.name}>
                {route.name}
              </Link>
              <div className="dropdown-content">
                {route.child
                  ? route.child.map((route) => (
                      <Link className="dropbtn" to={route.url} key={route.name}>
                        {route.name}
                      </Link>
                    ))
                  : ""}
              </div>
            </div>
          ))}
        </div>

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
