import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ActivityDefinition } from "../components/app/types";

export const Counter: ActivityDefinition<CounterParams> = {
  decoder(props) {
    const mayValue = props.match.params.value ? parseInt(props.match.params.value) : 0;
    if (!isNaN(mayValue)) {
      return {
        value: !isNaN(mayValue) ? mayValue : 0,
      };
    } else {
      return null;
    }
  },
  Component: ({ params }) => {
    const [state, setState] = useState({ count: params.value });

    const addCount = (value: number) => {
      setState(previous => ({ ...previous, count: previous.count + value }));
    };

    return (
      <div>
        <button onClick={ () => addCount(-1) }>-</button>
        <span>{ state.count }</span>
        <button onClick={ () => addCount(+1) }>+</button>
        <div>
          <ul>
            <li><Link to="/counter" className="App-link">Counter</Link></li>
            <li><Link to="/counter/42" className="App-link">Counter: 42</Link></li>
            <li><Link to="/counter/100" className="App-link">Counter: 100</Link></li>
          </ul>
        </div>
      </div>
    );
  },
};

export interface CounterParams {
  value: number;
}
