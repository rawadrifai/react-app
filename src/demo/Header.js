import React from 'react'
import ReactDOM from 'react-dom'
import {Image,Grid,Row,Col} from 'react-bootstrap'
import myImage from './images/jackson.jpg'

class Header extends React.Component {

  render() {

    return (

         <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image src={myImage} circle />
            </Col>
            <Col xs={6} md={4}>
              <Image src={myImage} circle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="http://suptg.thisisnotatrueending.com/archive/3701269/images/1234538268896.png" thumbnail />
            </Col>
          </Row>
        </Grid>

    )
  }
}

export default Header