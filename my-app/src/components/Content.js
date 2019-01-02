import React, { Component } from 'react';
import ComponentInfo from './content/ComponentInfo';
import JSXInfo from './content/JSXInfo';

class Content extends Component {
    render() {
        return (
            <div className="component">
              <h2>Components</h2>
              <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</p>
              <p>Conceptually, components are like <span className="bold">JavaScript functions.</span> They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</p>
              <ComponentInfo/> 
              <JSXInfo/>
            </div>
        )
    }
}

export default Content;



