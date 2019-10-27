import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import './Home.css';

const Home: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/views/Home.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <ul>
            <li>
              <Link to="/counter" className="App-link">Counter</Link>
            </li>
            <li>
              <Link to="/counter/42" className="App-link">Counter: 42</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Home;
