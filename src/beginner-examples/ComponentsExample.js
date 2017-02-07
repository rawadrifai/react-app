import React from 'react';

class ComponentsExample extends React.Component {
  
  render() {
    
    return (
      <div>
        <h1>This is ComponentsExample</h1>
        <Button txt="click me">React</Button>
        <Button txt="abcde">React</Button>
        <Button txt="12345">React</Button>

        <hr/>
      </div>
    )

  }
}


const Button = (props) => 
        <button>{props.txt}</button>



Button.propTypes = {
    txt(props, propName, component) {
      if (!(propName in props))
        return new Error(`missing prop ${propName}`)

      if (props[propName].length < 5)
        return new Error(`prop ${propName} length is too short`)
    }
}

//  Button.propTypes = {
//    txt: React.PropTypes.string.isRequired
//  }

export default ComponentsExample