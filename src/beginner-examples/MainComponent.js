import React from 'react'
import ReactDOM from 'react-dom'
import PropsExample from './PropsExample'
import StateExample from './StateExample'
import ComponentsExample from './ComponentsExample'
import EventsExample from './EventsExample'
import RefsExample from './RefsExample'
import LifeCycleExample from './LifeCycleAndMountingExample'
import ArraysExample from './ArraysExample'
import ChildrenExample from './ChildrenExample'
import CloneElementExample from './CloneElementExample'

class MainComponent extends React.Component {

    render() {
        return (
            <div>

                <CloneElementExample/>
                <ChildrenExample/>
                <ArraysExample border="1px"/>
                <LifeCycleExample/>
                <RefsExample/>
                <EventsExample/>
                <ComponentsExample/>
                <StateExample/>
                <PropsExample txt="This is NOT default txt value"/>
            
            </div>
        )
    }
}

export default MainComponent