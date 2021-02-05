import React, { Component } from 'react';
import {connect} from 'react-redux';
import { insertUserInformations } from '../../../../actions/MainActions';

export class FormComponent extends Component {
    onChangeFromTo = (e) =>{
        this.props.insertUserInformations({
            name:"userInformations."+ e.target.name,
            value: e.target.value
        })   
    }

    render() {
        const {userInformations} = this.props
        return (
            <div className="row">
                <form>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name="from_invest_value" value={userInformations.from_invest_value} 
                            onChange={this.onChangeFromTo.bind(this)} required />
                            <div className="underline"> </div>
                            <label htmlFor="">From</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="to_invest_value" value={userInformations.to_invest_value} 
                            onChange={this.onChangeFromTo.bind(this)} required  />
                            <div className="underline"> </div>
                            <label htmlFor="">to</label>
                        </div>
                    </div>
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)
