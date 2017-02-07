import React from 'react'
import ReactDOM from 'react-dom'

import {Button, ButtonToolbar, Modal} from 'react-bootstrap'

import {mybtnstyle} from '../css/MyBtn.js'


class ButtonsExample extends React.Component {

  render() {

    return (
      <div>

        <br/>
        <ButtonToolbar>
          <Button style={mybtnstyle}>Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>

        <br/>
        
      </div>
    )

  }
}

export default ButtonsExample