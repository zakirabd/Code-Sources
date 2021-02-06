import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { changeStatesToTrue, changeStatesToFalse } from '../../../actions/MainActions';

export class Footer extends Component {
    componentDidMount (){
        this.props.changeStatesToTrue({ name: "step1" })
        this.props.changeStatesToFalse({ name: "step2"  })
        this.props.changeStatesToFalse({ name: "step3"  })
    }
    nextPage = ()=>{

        const {step1, step2, step3} = this.props;
            if(step1){
               
                this.props.changeStatesToTrue({ name: "step2"  })
                this.props.changeStatesToFalse({ name: "step1"  })
                this.props.changeStatesToFalse({ name: "step3"  })
            }else if(step2){
                this.props.changeStatesToTrue({ name: "step3" })
                this.props.changeStatesToFalse({ name: "step1"  })
                this.props.changeStatesToFalse({ name: "step2"  })
            }        
    }
    perviousPage = e =>{
        const {step1, step2, step3} = this.props;
        if(step3){
            this.props.changeStatesToTrue({ name: "step2"  })
            this.props.changeStatesToFalse({ name: "step1"  })
            this.props.changeStatesToFalse({ name: "step3"  })
        }else if(step2){
            this.props.changeStatesToTrue({ name: "step1" })
            this.props.changeStatesToFalse({ name: "step2"  })
            this.props.changeStatesToFalse({ name: "step3"  })
        }
    }


    onClickShow ( e){
        this.props.changeStatesToTrue({ name: "showData" })
    }
    render() {
        const {step1, step2, step3} = this.props;
       
        return (
            <div className="footer-buttons">
                <div className="row">
                    {
                        step1 ?
                        <a href="#"><i className="fa fa-long-arrow-left"> Back to the homepage</i></a>:
                        step2 || step3 ?
                        <a href="#" onClick={this.perviousPage.bind(this)}><i className="fa fa-long-arrow-left"> Back to the previous step</i></a>:
                        <a href="#"><i className="fa fa-long-arrow-left"> Back to the homepage</i></a>

                    } 
                    <div className="row" >
                        <button className="skip-button" onClick={this.onClickShow.bind(this)} type="button">Skip for now</button>
                        <button className="next-button" onClick={this.nextPage.bind(this)} type="button">Next step <i className="fa fa-long-arrow-right"></i></button>    
                    </div> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step1: state.Data.step1,
    step2: state.Data.step2,
    step3: state.Data.step3
})

const mapDispatchToProps = {
    changeStatesToTrue, changeStatesToFalse
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
