import React from 'react'

var cellStyle = {"border": "1px solid black"};
const Person = (props) => <tr><td style={cellStyle}><h3>{props.name}</h3></td></tr>

class ArraysExample extends React.Component {

    constructor() {
        super()
        this.state = {
            items:['Ned Stark','John Snow','The Imp'],
            filter:''
        }

        
    }

    componentWillMount() {
        cellStyle = {"border": this.props.border + " solid black"};
    }

    update() {
        
        this.setState({
            filter: this.refs.inputTbx.value
        })
    }

    render() {
        let items = this.state.items
        items = items.filter(item => item.toLowerCase().includes(this.state.filter.toLowerCase()))

        return (
        <div>
            <h1>This is ArraysExample</h1>
            
            <input ref="inputTbx" type="text" onChange={this.update.bind(this)}/>
            <table>
                <tbody>
                    {items.map(item => <Person key={item} name={item}/>)}
                </tbody>
            </table>

            <hr/>
        </div>
        )
    }
}

export default ArraysExample