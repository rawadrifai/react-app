import React from 'react'

class ChildrenExample extends React.Component {


    render() {
        return (
            <div>
                <h1>This is ChildrenExample</h1>
                    <Parent>
                        <label className="classA">classA</label>
                        <label className="classB">classB</label>
                    </Parent>
                <hr/>
            </div>
        )
    }
}


class Parent extends React.Component {
    render() {
        let originalItems = this.props.children

        let items = this.props.children.map(child => child)
        console.log(items)

        let items1 = React.Children.map(this.props.children, child => child)
        console.log(items1)

        let items2 = React.Children.toArray(this.props.children)
        console.log(items2)

        let items3 = React.Children.forEach(this.props.children, child => console.log(child.props.className))
        console.log(items3)

        return (
            <div>
            {originalItems}
            </div>
        )
        
        
    }
}


export default ChildrenExample