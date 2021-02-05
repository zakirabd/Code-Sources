import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Body extends Component {
    render() {
        const {step1, step2, step3} = this.props;
        
        return (
            <div className="side-bar-body">
                <div className="column">
                    <div className="route">
                        <div className="icon">
                            <span></span>
                            <span className="inner-icon"></span>
                        </div>
                        <p>Contact details</p>
                    </div>
                    <div className="column">
                        <span className="line "></span>
                        <span className="line "></span>
                    </div>
                    <div className="route">
                        <div className="icon">
                            {
                                step2 || step3 ? 
                                <>
                                <span></span>
                                <span className="inner-icon"></span> 
                                </>:
                                <span className="whiteBackColor"></span>
                            }
                        </div>
                        <p>Investment plans</p>
                    </div>
                    <div className="column">
                    {
                                step2 || step3 ? 
                                <>
                                 <span className="line "></span>
                                 <span className="line "></span>
                                </>:
                                <>
                                <span className="line whiteColor"></span>
                                <span className="line whiteColor"></span>
                                </>
                            }
                        
                    </div>
                    <div className="route">
                        <div className="icon">
                            {
                                step3 ? 
                                <>
                                <span></span>
                                <span className="inner-icon"></span> 
                                </>:
                                <span className="whiteBackColor"></span>
                            }
                        </div>
                        <p>Investment preferences</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step1: state.Data.step1,
    step2: state.Data.step2,
    step3: state.Data.step3
})


export default connect(mapStateToProps)(Body)
