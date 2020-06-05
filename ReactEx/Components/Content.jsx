const React = require('react');
const { Component } = React;

class Content extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </div>
        );
    }
}

module.exports = Content;
