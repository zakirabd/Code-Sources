import React, { Component } from 'react';
import FullnameComponent from './form_components/FullnameComponent'
import PhoneComponent from './form_components/PhoneComponent';
import EmailComponent from './form_components/EmailComponent';
import CountryComponent from './form_components/CountryComponent';

export class Form extends Component {
    render() {
        return (
            <div>
                <form  className="contact-form">
                    <div className="form-row">
                        <FullnameComponent />
                        <PhoneComponent />
                    </div>  
                    <div className="form-row">
                        <EmailComponent />
                    </div> 
                    <CountryComponent />            
                </form>
            </div>
        )
    }
}

export default Form
