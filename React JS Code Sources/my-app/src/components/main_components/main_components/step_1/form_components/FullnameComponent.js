import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  insertUserInformations} from '../../../../../actions/MainActions';

export class FullnameComponent extends Component {
    onChangeFullname =(e) =>{
        this.props.insertUserInformations({
            name: e.target.name,
            value: e.target.value
        })   
    }
    render() {
        const {fullname} = this.props;
        return (
            <div className="input-data">
                <input type="text" name="fullname" value={fullname} 
                onChange={this.onChangeFullname.bind(this)} required />
                <div className="underline"> </div>
                <label htmlFor="">Fullname</label>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fullname: state.Data.fullname
})

const mapDispatchToProps = {
    insertUserInformations
}

export default connect(mapStateToProps, mapDispatchToProps)(FullnameComponent)
