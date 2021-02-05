import React, { Component } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import {connect} from 'react-redux';
import {insertUserInformations} from '../../../../../actions/MainActions';

export class PhoneComponent extends Component {
  onChangeNumber = (e) =>{
    
    this.props.insertUserInformations({
        name: "userInformations.number",
        value: e
    })   
}
  render() {
    const {userInformations} = this.props;
    return (
      <div className="input-data">
        <PhoneInput
        international
        name="number"
        value={userInformations.number}
        className="select-phone-code"
        onChange={this.onChangeNumber.bind(this)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent)




