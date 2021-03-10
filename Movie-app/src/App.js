import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Customers from "./components/Customers.jsx";
import Rentals from "./components/Rental.jsx";
import NotFound from "./components/NotFound.jsx";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";
import NavBar from "./components/Navbar.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/:id" component={MovieForm} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/rentals" component={Rentals} />
            <Route exact path="/notfound" component={NotFound} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
