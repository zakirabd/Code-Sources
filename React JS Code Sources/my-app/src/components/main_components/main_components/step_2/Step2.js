import React, { Component } from 'react'
import AccreditedComponent from './AccreditedComponent'
import FormComponent from './FormComponent'
import ProgressBarComponent from './ProgressBarComponent'

export class Step2 extends Component {
    render() {
        return (
            <div className="invest-form">
                <h2>Ho much are you planning to invest in this year?</h2>
                <div className="from-to-component">
                    
                    <FormComponent />
                    <ProgressBarComponent />
                    <AccreditedComponent />
                </div>
            </div>
        )
    }
}

export default Step2
