import React, { Component } from 'react';

class StateInfo extends Component {
    render() {
        return (
            <div>
                <h3>State</h3>
                <p>Like properties, state affects how a component behaves and renders. Unlike properties, there’s no way to define what state should be applied to components via JSX.</p>
                <p>The main difference between state and props is that props are <span className="bold">immutable</span>.</p>
                <h4>How State works:</h4>
                <ul>
                    <li><span className="bold">Setting Initial State:</span> This is done by defining a method called getInitialState() and returning an object</li>
                    <li><span className="bold">Setting State:</span> This happens when it’s passed (whether directly or by nesting it) to the React.renderComponent() method.</li>
                    <li><span className="bold">Replacing State:</span> This method is for when you want to clear out the values already in state, and add new ones.</li>
                </ul>

            </div>
        )
    }
}

export default StateInfo;