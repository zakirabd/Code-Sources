import React, { Component } from 'react'

export class AccreditedComponent extends Component {
    render() {
        return (
            <div className="accredited-question">
                <h2>Are you an accredited investor?</h2>
                <div className="ques-btn">
                    <button><input type="radio" /> Yes</button>
                    <button><input type="radio" /> No</button>
                </div>
            </div>
        )
    }
}

export default AccreditedComponent
