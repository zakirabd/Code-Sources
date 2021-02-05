import React, { Component } from 'react';
import {connect} from 'react-redux';

export class TextBox extends Component {
    render() {
        const {step1, step2, step3, steps} = this.props;
        let step;

        if(step1){
            step = steps.step1
        }else if(step2){
            step = steps.step2
        }else if(step3){
            step = steps.step3
        }
        return (
            <div>
                <div className="main-text-box">
                    <h2>{step.header.header}</h2>
                    <p>{step.header.textBox}</p>
                </div>
            </div>  
        )
    }
}

const mapStateToProps = (state) => ({
    steps: state.Data.steps,
    step1: state.Data.step1,
    step2: state.Data.step2,
    step3: state.Data.step3
})



export default connect(mapStateToProps)(TextBox)
