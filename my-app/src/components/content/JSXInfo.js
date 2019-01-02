import React, { Component } from 'react';

class JSXInfo extends Component {
    render() {
        return (
            <div>
                <h2>JSX</h2>
                <p>React components have a render function that specifies what the HTML output of our React component will be. JavaScript eXtension, or more commonly JSX, is a React extension that allows us to write JavaScript that looks like HTML.</p>
                <p>To see what this means, imagine we had a React component that renders an h1 HTML tag. JSX allows us to declare this element in a manner that closely resembles HTML</p>
            </div>
        )
    }
}

export default JSXInfo;