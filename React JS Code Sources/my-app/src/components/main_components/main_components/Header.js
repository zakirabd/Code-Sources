import React, { Component } from 'react';
import {connect} from 'react-redux';


export class Header extends Component {
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
            <div className="main-header">
                <div className="row">
                    <h3 className="steps">STEP {step.step} OF 3</h3>
                    <div className="header-help">
                        <p>Lost or have trouble?</p>
                        <a href="#">Get help</a>
                        <i className="fa fa-long-arrow-right"></i>
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



export default connect(mapStateToProps)(Header)
