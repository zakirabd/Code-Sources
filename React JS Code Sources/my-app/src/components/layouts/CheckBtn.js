import React, { Component } from 'react'

export class CheckBtn extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" id="check"  />
                <label htmlFor="check" className="respons-btn"><i className="fas fa-align-justify"></i></label>
            </div>
        )
    }
}

export default CheckBtn
