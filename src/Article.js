import React, { Component } from 'react';

class Article extends Component {
    constructor(props) { 
        super(props);
    }
    render() {
        return (
            <div className="tabs is-right" key={this.props.index}>
                <ul>
                    <li>
                        <a href={this.props.link}>{this.props.title}</a>
                    </li>
                    <br></br><br></br>
                </ul>
            </div>

        )
    }
}



export default Article;