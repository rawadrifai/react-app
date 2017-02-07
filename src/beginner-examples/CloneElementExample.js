import React from 'react'

class CloneElementExample extends React.Component {

    render() {

        return (
        <div>
        <h1>This is CloneElementExample</h1>

        <Buttons>
            <button value="A">A</button>
            <button value="B">B</button>
            <button value="C">C</button>
        </Buttons>

        <hr/>
        </div>
        )
    }
}

class Buttons extends React.Component {

    constructor() {
        super()
        this.state = {
            selected: 'None'
        }
    }

    selectItem(selected) {
        this.setState(
            {selected: selected.props.value}
        )
    }

    render() {    
        let fn = child =>
            React.cloneElement(child, {
                onClick: this.selectItem.bind(this, child),
                onMouseOver: this.selectItem.bind(this, child)
            })
        let items = React.Children.map(this.props.children, fn)

        return (
            <div>
                <h3>You have selected: {this.state.selected}</h3>
                {items}
            </div>
        )
    }
}
export default CloneElementExample