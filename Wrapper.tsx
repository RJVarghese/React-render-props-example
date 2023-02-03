import * as React from 'react';
export default class Wrapper extends React.Component<any,any>{
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  };
  increment = () => {
    this.setState(prevState =>{
      return{
           ...prevState,
           count : prevState.count + 1
      }
   });
  }
  render() {
    return (
      <div>
      {this.props.render(this.state.count,this.increment)}
      </div>
    )
  }
}