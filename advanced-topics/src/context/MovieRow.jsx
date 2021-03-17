import React, { useContext } from "react";
import CartContext from "./ cartContext";
import UserContext from "./userContext";

function MovieRow() {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  console.log(cartContext);

  return (
    <div>
      {userContext.currentUser ? userContext.currentUser.name : ""}'s Movie Row{" "}
    </div>
  );
}

export default MovieRow;
