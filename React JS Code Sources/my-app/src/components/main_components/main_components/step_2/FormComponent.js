import React, { Component } from 'react';
import {connect} from 'react-redux';
import { insertUserInformations } from '../../../../actions/MainActions';

export class FormComponent extends Component {
    onChangeFromTo = (e) =>{
        this.props.insertUserInformations({
            name: e.target.name,
            value: e.target.value
        })   
    }

    render() {
        const {from_invest_value, to_invest_value} = this.props
        return (
            <div className="row">
                <form>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name="from_invest_value" value={from_invest_value} 
                            onChange={this.onChangeFromTo.bind(this)} required />
                            <div className="underline"> </div>
                            <label htmlFor="">From</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="to_invest_value" value={to_invest_value} 
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
    from_invest_value: state.Data.from_invest_value,
    to_invest_value: state.Data.to_invest_value
})

const mapDispatchToProps = {
    insertUserInformations
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)
