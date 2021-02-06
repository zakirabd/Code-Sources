import React, { Component } from 'react';
import {connect} from 'react-redux';
import { changeStatesToTrue, changeStatesToFalse } from '../../actions/MainActions';
export class PersonalData extends Component {
    onClickClose = e =>{
        this.props.changeStatesToFalse({ name: "showData"  })
    }
    render() {
        const {country, fullname, numbers, email, from_invest_value, to_invest_value, interest1, 
            interest2, interest3, interest4, interest5, interest6, interest7, interest8, showData} = this.props

        return (
            <div>
                <div className="back_page"></div>
                <div className="result">
                   <div className="column">
                      <h3>Сontact details</h3>
                      {fullname != ''?
                      <p>Fullname:  { fullname}</p> :null}
                      {numbers != ''?
                      <p>Number: {numbers}</p> : null}
                      {email !='' ?
                      <p>Email: {email}</p> : null}
                      {country !='' ?
                      <p>Country: {country}</p> : null}
                      <h3>Investment Plans</h3>
                      {from_invest_value !='' ?
                      <p>From: {from_invest_value}</p> : null}
                      {to_invest_value !='' ?
                      <p>To: {to_invest_value}</p> : null}
                      <h3>Investment preferences</h3>
                      <ul>
                          {interest1 !='' ?
                          <li>{interest1}</li> : null}
                          {interest2 !='' ?
                          <li>{interest2}</li> : null}
                          {interest3 !='' ?
                          <li>{interest3}</li> : null}
                          {interest4 !='' ?
                          <li>{interest4}</li> : null}
                          {interest5 !='' ?
                          <li>{interest5}</li> : null}
                          {interest6 !='' ?
                          <li>{interest6}</li> : null}
                          {interest7 !='' ?
                          <li>{interest7}</li> : null}
                          {interest8 !='' ?
                          <li>{interest8}</li> : null}
                      </ul>
                        <button type="button" onClick={this.onClickClose.bind(this)}>Close</button>
                    </div> 
                </div> 
            </div>
            
            
        )
    }
}

const mapStateToProps = (state) => ({
    
    country: state.Data.country,
    fullname: state.Data.fullname,
    numbers: state.Data.numbers,
    email: state.Data.email,
    from_invest_value: state.Data.from_invest_value,
    to_invest_value: state.Data.to_invest_value,
    interest1: state.Data.interest1,
    interest2: state.Data.interest2,
    interest3: state.Data.interest3,
    interest4: state.Data.interest4,
    interest5: state.Data.interest5,
    interest6: state.Data.interest6,
    interest7: state.Data.interest7,
    interest8: state.Data.interest8,
    showData: state.Data.showData
})
const mapDispatchToProps = {
    changeStatesToTrue, changeStatesToFalse
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonalData)
