import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './main_components/Header';
import TextBox from './main_components/TextBox';
import Step1 from './main_components/step_1/Step1';
import Step2 from './main_components/step_2/Step2';
import Step3 from './main_components/step_3/Step3';
import Footer from './main_components/Footer';
import PersonalData from './PersonalData';


export class Main extends Component {

  
    render() {
        const {step1, step2, step3, showData} = this.props;
    
        return (
            <div className="main-container">
                <Header />
                <TextBox />
                {
                    showData ?
                    <PersonalData />:
                    null
                }
                
                {
                    step1 ? <Step1 /> :
                    step2 ? <Step2 /> :
                    step3 ? <Step3 /> :
                    step1
                }
               
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step1: state.Data.step1,
    step2: state.Data.step2,
    step3: state.Data.step3,
    showData: state.Data.showData
})



export default connect(mapStateToProps)(Main)
