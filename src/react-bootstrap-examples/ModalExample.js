import React from 'react'
import ReactDOM from 'react-dom'

import {Popover, Tooltip, Modal, OverlayTrigger, Button} from 'react-bootstrap'


class ModalExample extends React.Component {

  constructor() {
    super()
    this.state = { showModal: false }
  }

  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
  }

  render() {

    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    )

    const tooltip = (
      <Tooltip id="modal-tooltop">
        wow.
      </Tooltip>
    )




    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)}>
          Launch demo modal
        </Button>


        

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>

          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <h4>Popover on Hover in a modal</h4>
            <OverlayTrigger placement="right" overlay={popover}><a href="#">popover</a></OverlayTrigger>

            <h4>Popover on Click in a modal</h4>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}><a href="#">popover</a></OverlayTrigger>

            <h4>Tooltips in a modal</h4>
            <OverlayTrigger placement="bottom" overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>

            </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )

  }
}


export default ModalExample