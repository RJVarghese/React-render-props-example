import * as React from 'react';
export default function CounterTwo(props){
    return (
      <div>
      <span>{props.count}</span>
      <button style={{color:'green'}} onClick={props.increment}>Increment Count</button>
      </div>
    )
}