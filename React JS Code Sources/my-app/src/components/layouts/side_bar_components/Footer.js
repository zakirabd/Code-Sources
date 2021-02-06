import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Footer extends Component {
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
            
            <div className="side-bar-footer">
                <i className="fas fa-quote-left"></i>
                <div className="side-bar-text-container">
                   <p>{ step.sideBar.textContext}</p>
                   
                    <div className="personal-name">
                        <div className="column">
                            <h3> {step.sideBar.userName} </h3>
                            <div className="row">
                                <h3> {step.sideBar.userPosition}</h3>
                                <h2><b>U</b>P</h2>
                            </div>
                        </div>
                    </div>
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


export default connect(mapStateToProps)(Footer)
