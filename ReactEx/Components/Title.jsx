const React = require('react');
const { Component } = React;

class Title extends Component{
    render(){
        return(
            <header>
                <h1><a href="" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.desc}
            </header>
        );
    }
}

module.exports = Title;