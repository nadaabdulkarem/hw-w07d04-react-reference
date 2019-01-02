import React, { Component } from 'react';
import PropsInfo from './info/PropsInfo';
import StateInfo from './info/StateInfo';
import LifeCycleInfo from './info/LifeCycleInfo';

class ComponentInfo extends Component {
    render() {
        return (
            <div className="componentInfo">
                <div className="component">
                    <PropsInfo/>
                    <StateInfo/>
                    <LifeCycleInfo/>
                </div>
            </div>
        )
    }
}

export default ComponentInfo;