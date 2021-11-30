import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import MyPorject from './Components/MyPorject/MyPorject';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';


function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          
          <Route exact path='/about'>
            <About></About>
          </Route>

          <Route exact path='/project'>
            <MyPorject></MyPorject>
          </Route>

          <Route exact path='/details/:projectId'>
            <ProjectDetails></ProjectDetails>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;