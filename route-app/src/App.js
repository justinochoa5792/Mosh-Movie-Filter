import Navbar from "./components/navbar";
import Products from "./components/products";
import Post from "./components/posts.jsx";
import Dashboard from "./components/admin/dashboard.jsx";
import Home from "./components/home";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/admins" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
