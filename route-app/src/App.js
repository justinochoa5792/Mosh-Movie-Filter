import Navbar from "./components/navbar";
import Products from "./components/products";
import ProductDetails from "./components/productDetails";
import Post from "./components/posts.jsx";
import Dashboard from "./components/admin/dashboard";
import NotFound from "./components/notFound";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route
            exact
            path="/products"
            render={(props) => <Products sortBy="newest" {...props} />}
          />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/posts/:year?/:month?" component={Post} />
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/" component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
