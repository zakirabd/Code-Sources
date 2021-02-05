import React, { Component } from 'react';
import {connect} from 'react-redux';
import { insertUserInformations } from '../../../../actions/MainActions';

export class ProgressBarComponent extends Component {
   
    render() {
        const {userInformations} = this.props
        return (
            <div className="progres-amount">
                {
                    <progress className="progres-value"  value={userInformations.to_invest_value*4} min="10000" max="1000000"></progress>
                }
               
                <div className="progres-percent">
                    <span id="prog1" className="progress-start background"></span>
                    <span className="background" id="prog2"></span>
                    <span className="background" id="prog3"></span>
                    <span className="background" id="prog4"></span>
                    <span id="prog5" className="progress-start background"></span>
                    <span id="prog6" ></span>
                </div>
                <div className="progres-value-amount">
                    <label className="color" htmlFor="">$10,000</label>
                    <label className="color" htmlFor="">$50,000</label>
                    <label className="color" htmlFor="">$100,000</label>
                    <label className="color" htmlFor="">$200,000</label>
                    <label htmlFor="">$500,000</label>
                    <label htmlFor="">$1,000,000</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userInformations: state.Data.userInformations
})

const mapDispatchToProps = {
    insertUserInformations
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarComponent)
