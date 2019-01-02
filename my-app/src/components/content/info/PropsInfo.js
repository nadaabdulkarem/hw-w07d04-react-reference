import React, { Component } from 'react';

class PropsInfo extends Component {
    render() {
        return (
            <div>
                <h3>Props</h3>
                <p>The term <span className="bold">render prop</span> refers to a technique for sharing code between React components using a prop whose value is a function.</p>
            </div>
        )
    }
}

export default PropsInfo;