import * as React from 'react';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import './style.css';
import Wrapper from './Wrapper';

export default function App() {
  return (
    <div>
      <Wrapper render={(count,increment) => {
        return <CounterOne count={count} increment={increment}/>
      }}/>
      <Wrapper render={(count,increment) => {
        return <CounterTwo count={count} increment={increment}/>
      }}/>
    </div>
  );
}
