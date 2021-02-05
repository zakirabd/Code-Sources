import React, { Component } from 'react';
import Body from './side_bar_components/Body';
import Footer from './side_bar_components/Footer';

export class SideBar extends Component {
    render() {
        return (
            <div class="side-bar">
                <div class="column">
                    <div class="side-bar-header">
                        <h2><b>United</b>Properties</h2>
                    </div>
                    <Body />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default SideBar
