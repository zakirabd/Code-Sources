import React, { Component } from 'react';
import 'react-phone-number-input/style.css';
import {connect} from 'react-redux';
import {insertUserInformations} from '../../../../../actions/MainActions';

export class PhoneComponent extends Component {
  onChangeNumber = (e) =>{
    this.props.insertUserInformations({
        name: e.target.name,
        value: e.target.value
    })   
}
  render() {
    const {numbers} = this.props;
    return (
      <div className="input-data">
          <input type="number" name="numbers" value={numbers} 
          onChange={this.onChangeNumber.bind(this)} required />
          <div className="underline"> </div>
          <label htmlFor="">Number</label>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  numbers: state.Data.numbers
})

const mapDispatchToProps = {
  insertUserInformations
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent)




