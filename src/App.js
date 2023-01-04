import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from "./Page/home";
import About from "./Page/about";
import Navbar from "./Page/navbar";
import { ImportExport } from "@mui/icons-material";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;