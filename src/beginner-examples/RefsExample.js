import React from 'react';

class RefsExample extends React.Component {
  
  constructor() {
    super();
    this.state = {
      a: '',
      b: '',
      c: '',
      d: ''
    } 
  }

  update() {
    this.setState ({ 
        a: this.refs.t1.value,
        b: this.refs.t2.refs.mytextbox.value,
        c: this.t3.value,
        d: this.t4.refs.mytextbox.value
      })
  }

  render() {
    return (
      <div>
        <h1>This is RefsExample</h1>

        <input ref="t1" type="text" onChange={this.update.bind(this)}/>
        <br/>a:{this.state.a}<br/>

        <Input ref="t2" update={this.update.bind(this)}/>
        <br/>b:{this.state.b}<br/>

        <input ref={node => this.t3 = node} type="text" onChange={this.update.bind(this)}/>
        <br/>c:{this.state.c}<br/>

        <Input ref={component => this.t4 = component} update={this.update.bind(this)}/>
        <br/>d:{this.state.d}<br/>

        <hr/>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (<input ref="mytextbox" type="text" onChange={this.props.update}/>)
  }
}

export default RefsExample