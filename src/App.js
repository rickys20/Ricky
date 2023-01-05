import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from "./Page/home";
import About from "./Page/about";
import Navbar from "./Page/navbar";
import Footer from "./Page/footer";
import Experience from "./Page/experience";
import Projects from "./Page/projects";
import Contact from "./Page/contact"
import { ImportExport } from "@mui/icons-material";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;