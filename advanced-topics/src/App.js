// import "./App.css";
// import Counter from "./HOC/Counter";
// import Movie from "./HOC/Movie";
// import Users from "./HOC/Users.jsx";

// function App() {
//   return (
//     <div className="App">
//       <Movie id={1} />
//       <Counter />
//       <Users />
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/ cartContext";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user" + username);
    const user = { name: "Justin" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
