import React, { Component } from 'react'
import Form from './Form'
import PrivaceComponent from './PrivaceComponent'

export class Step1 extends Component {
    render() {
        return (
            <div>
                <Form />
                <PrivaceComponent />
            </div>
        )
    }
}

export default Step1
