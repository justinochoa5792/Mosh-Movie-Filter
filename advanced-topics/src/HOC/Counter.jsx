import React, { useState, Fragment } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`$name has clicked ${count} times`);

  return (
    <Fragment>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        {name} has clicked the counter {count} times!
      </div>
      <button
        onClick={() => {
          setCounter(count + 1);
        }}
      >
        Increase
      </button>
    </Fragment>
  );
};

export default Counter;
