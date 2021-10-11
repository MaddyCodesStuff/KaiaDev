import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/home';
import BlogOne from './Pages/BlogPages/blogone';
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path ="/blog-1">
              <BlogOne />
            </Route>
            <Route path ="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
