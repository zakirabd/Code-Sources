import React, { Component } from 'react'

export class PrivaceComponent extends Component {
    render() {
        return (
            <div className="privace">
                <h2>Privacy policy</h2>
                <p>We know you care about how your personal information is used and shared, so we take your privacy seriously</p>
                <a href="#"> Expand privacy policy  <i className="fa fa-long-arrow-right"></i></a>
            </div>
        )
    }
}

export default PrivaceComponent
