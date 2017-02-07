import React from 'react';

class EventsExample extends React.Component {
  
  constructor() {
    super()
    this.state = { currentEvent: '-----'}
    this.update = this.update.bind(this) 
  }

  update(e) {
    this.setState({currentEvent: e.type})
  }

  render() {
    
    return (
      <div>
      <h1>This is EventsExample</h1>
      <textarea rows="5" cols="20"
        onKeyPress={this.update}
        onCopy={this.update}
        onCut={this.update}
        onPaste={this.update}
        onFocus={this.update}
        onBlur={this.update}
        onDoubleClick={this.update}
        />
      <h3>{this.state.currentEvent}</h3>
        
      <hr/>
      </div>
    )

  }
}


export default EventsExample