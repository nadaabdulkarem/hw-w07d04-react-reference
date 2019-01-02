import React, { Component } from 'react';

class LifeCycleInfo extends Component {
    render() {
        return (
            <div>
                <h3>LifeCycle Methods</h3>
                <p>Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM (mounting), when the component updates, and when the component gets unmounted or removed from the DOM.</p>
                <p>LifeCycle has two methods:</p>
                <ul>
                    <li><span className="bold">componentDidMount()</span>  : This method runs after the component output has been rendered to the DOM.</li>
                    <li><span className="bold">componentWillUnmount()</span> : If the network request sending library supports aborting the ongoing network request call, you can definitely call this method.</li>
                </ul>
            </div>
        )
    }
}

export default LifeCycleInfo;