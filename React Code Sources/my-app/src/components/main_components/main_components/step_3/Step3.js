import React, { Component } from 'react'
import {connect} from 'react-redux';
import { insertUserInformations } from '../../../../actions/MainActions';
export class Step3 extends Component {
   
    componentDidMount(){
        
        const components =document.querySelector("#interested-row1").children;
        const components2 =document.querySelector("#interested-row2").children;
        for(let i=0; i<components.length; i++){
            const btn = components[i]
            btn.addEventListener('click', (e)=>{
                if(btn.children[0].checked){
                    this.props.insertUserInformations({
                        name: "userInformations."+ e.target.name,
                        value: e.target.value
                    })
                btn.classList.add("border-color");
                }else{
                    this.props.insertUserInformations({
                        name: "userInformations."+ e.target.name,
                        value: ""
                    }) 
                btn.classList.remove("border-color");
                }
            })
        }
        for(let i=0; i<components2.length; i++){
            const btn = components2[i]
            btn.addEventListener('click', (e)=>{
                if(btn.children[0].checked){
                    this.props.insertUserInformations({
                        name: "userInformations."+ e.target.name,
                        value: e.target.value
                    })
                btn.classList.add("border-color");
                }else{
                    this.props.insertUserInformations({
                        name: "userInformations."+ e.target.name,
                        value: ""
                    }) 
                btn.classList.remove("border-color");
                }
            })
        }
    }
    
    render() {
        
        return (
            <div className="interested-form" >
                
                <h2>What kind of real estate are you interested in?</h2>
                <div className="interested-row" id="interested-row1">
                    
                    <div className="interested-component ">
                        <input type="checkbox" value="Single family" name="interest1" id="interest1"  />
                        <p>Single family</p>
                    </div>
                    <div className="interested-component">
                        <input type="checkbox" value="Residential multifamily" name="interest2" id="interest2"  />
                        <p>Residential multifamily</p>
                    </div>
                    <div className="interested-component">
                        <input type="checkbox" value="Commercial retail" name="interest3" id="interest3"  />
                        <p>Commercial retail</p>
                    </div>
                    <div className="interested-component">
                        <input type="checkbox" value="Commercial industrial" name="interest4" id="interest4"  />
                        <p>Commercial industrial</p>
                    </div>
                </div>
                <div className="interested-row" id="interested-row2">
                    <div className="interested-component">
                        <input type="checkbox" value="Commercial hospitality" name="interest5" id="interest5"  />
                        <p>Commercial hospitality</p>
                    </div>
                    <div className="interested-component">
                        <input type="checkbox" value="Commercial warehousing" name="interest6" id="interest6"  />
                        <p>Commercial warehousing</p>
                    </div>
                    <div className="interested-component">
                        <input type="checkbox" value="Commercial office" name="interest7" id="interest7"  />
                        <p>Commercial office</p>
                    </div>
                    <div className="interested-component">
                        <input type="checkbox" value="Other" name="interest8" id="interest8"  />
                        <p>Other</p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step3)
