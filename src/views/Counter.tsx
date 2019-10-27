import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Counter: React.FunctionComponent<CounterParams> = (props: CounterParams) => {
  const params = props;

  const [state, setState] = useState({ count: params.value ? parseInt(params.value) : 0 });

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
            <li>
              <Link to="/counter" className="App-link">Counter</Link>
            </li>
            <li>
              <Link to="/counter/42" className="App-link">Counter: 42</Link>
            </li>
            <li>
              <Link to="/counter/100" className="App-link">Counter: 100</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Counter;

interface CounterParams {
  value?: string;
}
