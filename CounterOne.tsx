import * as React from 'react';
export default function CounterOne(props){
    return (
      <div>
      <span>{props.count}</span>
      <button style={{color:'red'}} onClick={props.increment}>Increment Count</button>
      </div>
    )
}