import React from 'react';

class StateExample extends React.Component {
  
  constructor() {
    super()
    this.state = {
      txt: 'This is the default state'
    } 
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    
    return (
      <div>
        <h1>This is StateExample.js</h1>

        <h3>{this.state.txt}</h3>
        <input type="text" onChange={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <hr/>
      </div>
    )

  }
}

const Widget = (props) => 
        <input type="text" onChange={props.update}/>


export default StateExample