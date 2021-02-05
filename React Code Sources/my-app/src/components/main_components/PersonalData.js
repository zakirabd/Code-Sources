import React, { Component } from 'react';
import {connect} from 'react-redux';
import { changeStatesToTrue, changeStatesToFalse } from '../../actions/MainActions';
export class PersonalData extends Component {
    onClickClose = e =>{
        this.props.changeStatesToFalse({ name: "showData"  })
    }
    render() {
        const {userInformations, showData} = this.props

        return (
            <div>
                <div className="back_page"></div>
                <div className="result">
                   <div className="column">
                      <h3>Сontact details</h3>
                      {userInformations.fullname != ''?
                      <p>Fullname:  { userInformations.fullname}</p> :null}
                      {userInformations.number != ''?
                      <p>Number: {userInformations.number}</p> : null}
                      {userInformations.email !='' ?
                      <p>Email: {userInformations.email}</p> : null}
                      {userInformations.country !='' ?
                      <p>Country: {userInformations.country}</p> : null}
                      <h3>Investment Plans</h3>
                      {userInformations.from_invest_value !='' ?
                      <p>From: {userInformations.from_invest_value}</p> : null}
                      {userInformations.to_invest_value !='' ?
                      <p>To: {userInformations.to_invest_value}</p> : null}
                      <h3>Investment preferences</h3>
                      <ul>
                          {userInformations.interest1 !='' ?
                          <li>{userInformations.interest1}</li> : null}
                          {userInformations.interest2 !='' ?
                          <li>{userInformations.interest2}</li> : null}
                          {userInformations.interest3 !='' ?
                          <li>{userInformations.interest3}</li> : null}
                          {userInformations.interest4 !='' ?
                          <li>{userInformations.interest4}</li> : null}
                          {userInformations.interest5 !='' ?
                          <li>{userInformations.interest5}</li> : null}
                          {userInformations.interest6 !='' ?
                          <li>{userInformations.interest6}</li> : null}
                          {userInformations.interest7 !='' ?
                          <li>{userInformations.interest7}</li> : null}
                          {userInformations.interest8 !='' ?
                          <li>{userInformations.interest8}</li> : null}
                      </ul>
                        <button type="button" onClick={this.onClickClose.bind(this)}>Close</button>
                    </div> 
                </div> 
            </div>
            
            
        )
    }
}

const mapStateToProps = (state) => ({
    
    userInformations: state.Data.userInformations,
    showData: state.Data.showData
})
const mapDispatchToProps = {
    changeStatesToTrue, changeStatesToFalse
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonalData)
