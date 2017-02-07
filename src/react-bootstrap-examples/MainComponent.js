import React from 'react'
import ReactDOM from 'react-dom'
import ButtonsExample from './ButtonsExample'
import ModalExample from './ModalExample'
import NavigationExample from './NavigationExample'

class MainComponent extends React.Component {

    render() {
        return (
            <div>

                <ButtonsExample/>
                <ModalExample/>
                <NavigationExample/>
            
            </div>
        )
    }
}

export default MainComponent