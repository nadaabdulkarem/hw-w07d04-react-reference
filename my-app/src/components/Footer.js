import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h2>Links: </h2>
                <ul>
                    <li><a href="https://reactjs.org/docs/jsx-in-depth.html">https://reactjs.org/docs/jsx-in-depth.html</a></li>
                    <li><a href="https://reactjs.org/docs/render-props.html">https://reactjs.org/docs/render-props.html</a></li>
                    <li><a href="https://stackoverflow.com/questions/40760308/how-to-properly-use-componentwillunmount-in-reactjs">https://stackoverflow.com/questions/40760308/how-to-properly-use-componentwillunmount-in-reactjs</a></li>
                    <li><a href="https://www.fullstackreact.com/30-days-of-react/day-2/">https://www.fullstackreact.com/30-days-of-react/day-2/</a></li>
                    <li><a href="https://medium.com/react-tutorials/react-state-14a6d4f736f5">https://medium.com/react-tutorials/react-state-14a6d4f736f5</a></li>
                </ul>
            </div>
        )
    }
}

export default Footer;