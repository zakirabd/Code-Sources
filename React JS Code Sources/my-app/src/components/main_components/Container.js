import React, { Component } from 'react';
import SideBar from '../layouts/SideBar';
import Main from './Main';
export class Container extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <input type="checkbox" id="check"  />
                        <label htmlFor="check" className="respons-btn"><i className="fas fa-align-justify"></i></label>
                        <SideBar />
                        <Main />
                    </div>
                </section>
            </div>
        )
    }
}

export default Container
