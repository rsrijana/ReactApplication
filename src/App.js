import "./App.css";
import "./components/Pages/Register.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { Services } from "./components/Pages/Services";
import { Register } from "./components/Pages/Register";
import signup from "./components/Pages/signup";
import { Profile } from "./components/Pages/Profile";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/blog" component={Blog}/> */}
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services}/>
            <Route path="/signup" component={signup}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </div>
        <Footer/>
      </Router>
      {/* //test */}
    </>
  );
}

export default App;
