import React, { useState, Fragment, useEffect } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${name} has clicked ${count} times`;
  }, [count, name]);

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
