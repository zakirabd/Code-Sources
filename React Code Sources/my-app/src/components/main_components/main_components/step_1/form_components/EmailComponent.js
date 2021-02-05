import React, { Component } from 'react';
import {connect} from 'react-redux';
import {insertUserInformations} from '../../../../../actions/MainActions';

export class EmailComponent extends Component {
    onChangeEmail = (e) =>{
        this.props.insertUserInformations({
            name:"userInformations."+e.target.name,
            value: e.target.value
        })   
       
        
    }
    render() {
        const {userInformations} = this.props;
        return (
            <div className="input-data-email">
                <input type="text" name="email" value={userInformations.email} onChange={this.onChangeEmail.bind(this)} required />
                <div className="underline"> </div>
                <label htmlFor="">E-mail address</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmailComponent)
