import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {  //=== Access info from another (parent) Component==//
        super(props);
    }
    render() {
        return (
            <div className="tabs is-right" key={this.props.index}>
                <ul>
                    <li>
                        <a href={this.props.link}>{this.props.name}</a>
                    </li>
                </ul>
            </div>

        )
    }
}



export default Menu;