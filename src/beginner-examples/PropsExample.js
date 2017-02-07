import React from 'react';

class PropsExample extends React.Component {
  

  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    
    return (
      <div>
        <h1>This is PropsExample.js</h1>
        
        <h3>{txt}</h3>
        <h3>{cat}</h3>

        <hr/>
      </div>
    )

  }
}

PropsExample.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

PropsExample.defaultProps = {
  txt: "This is the default txt value",
  cat: 0
}

export default PropsExample