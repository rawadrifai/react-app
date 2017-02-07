import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycleExample extends React.Component {

    constructor() {
        super()
        this.state = {
            val: 0
        }

        this.abc = this.update.bind(this)
    }

    update() {
        this.setState({
            val: this.state.val + 1
        })
    }

    componentWillMount() {
        this.setState ({m:2}) // to verify that we can access state before mounting
        console.log('componentWillMount')
    }

    render() {
        console.log('render')

        return (

            <div>
            <h1>This is LifeCycleExample</h1>
            
            <button onClick={this.abc}>{this.state.val * this.state.m}</button>

            <hr/>
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
        console.log(ReactDOM.findDOMNode(this)) // to verify that we have access to the DOM after mounting

        // to set a running process for "willunmount" to clean up
        this.inc = setInterval(this.abc, 500)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.inc) // clean up the interval
    }
}

class Wrapper extends React.Component {

    mount() {
        ReactDOM.render(<LifeCycleExample/>, document.getElementById('a'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
            <div>
                <h1>This is Wrapper</h1>

                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>

                <div id="a"/>

                <hr/>
            </div>
        )
    }
}

export default Wrapper