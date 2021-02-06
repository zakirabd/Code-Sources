import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetchCountries, insertUserInformations} from '../../../../../actions/MainActions';
export class CountryComponent extends Component {
    componentDidMount(){
        this.props.fetchCountries()
    }
    onChangeCountry = (e) =>{
        this.props.insertUserInformations({
            name: e.target.name,
            value: e.target.value
        })   
    }
    render() {
        const {countries, country} = this.props;
        return (
            <div className="input-country">
                <select className="select-country" name="country" value={country} onChange={this.onChangeCountry.bind(this)} >
                <option  value="0">Country</option>
                    {
                        countries.map(country =>{
                            return(
                                <option value={country.name} key={country.name}> {country.name} </option>
                            )
                        })
                    }
                
                </select>
            </div> 
        )
    }
}

const mapStateToProps = (state) => ({
    countries: state.Data.countries,
    country: state.Data.country
})

const mapDispatchToProps = {
    fetchCountries, insertUserInformations
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryComponent)
