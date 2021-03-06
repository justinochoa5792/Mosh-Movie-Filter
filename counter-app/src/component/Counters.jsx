import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { onDelete, onReset, onIncrement, onDecrease, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrease={onDecrease}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
