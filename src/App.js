import "./App.css";
import { Helmet } from 'react-helmet'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Page/home";
import About from "./Page/about";
import Navbar from "./Page/navbar";
import Footer from "./Page/footer";
import Experience from "./Page/experience";
import Projects from "./Page/projects";
import Contact from "./Page/contact";
import Education from "./Page/education"

function App() {
  return (
    <>
      <Router>
        <Helmet>
          <title>Ricky Supriyanto</title>
        </Helmet>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
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