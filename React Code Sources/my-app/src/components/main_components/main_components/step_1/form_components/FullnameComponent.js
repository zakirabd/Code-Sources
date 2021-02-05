import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  insertUserInformations} from '../../../../../actions/MainActions';

export class FullnameComponent extends Component {
    onChangeFullname =(e) =>{
        this.props.insertUserInformations({
            name:"userInformations."+e.target.name,
            value: e.target.value
        })   
    }
    render() {
        const {userInformations} = this.props;
        return (
            <div className="input-data">
                <input type="text" name="fullname" value={userInformations.fullname} 
                onChange={this.onChangeFullname.bind(this)} required />
                <div className="underline"> </div>
                <label htmlFor="">Fullname</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(FullnameComponent)
