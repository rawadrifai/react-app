import React from 'react'
//import ReactDOM from 'react-dom'

//import {mainDiv,navItem,pic,top,title,content,leftContent,middleContent,rightContent} from './css/main'
//import ProfilePicture from './ProfilePicture'
import {Grid, Row, Col} from 'react-bootstrap'
// import Navigation from './Navigation'
 import * as Stylesh from './css/main'

class Main extends React.Component {

    render() {
        return (
            <div>
            <div style={Stylesh.div1}>
            </div>
            
            <div style={Stylesh.div2}>
            <Grid style={Stylesh.mainGrid}>
                <Row style={Stylesh.simpleBorder}>
                    <Col xs={6}  md={4} style={Stylesh.simpleBorder}>
                        <Row>
                            <Col style={Stylesh.simpleBorderColumn}>hello</Col>
                        </Row>
                        <Row>
                            <Col style={Stylesh.simpleBorderColumn}>world</Col>
                        </Row>
                    </Col>
                    
                    
                    <Col xs={12}  md={8} style={Stylesh.simpleBorder}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                
                </Row>
            </Grid>
            </div>
            </div>
        )
    }
}



export default Main