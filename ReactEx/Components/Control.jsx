const React = require('react');
const { Component } = React;

class Control extends Component{
    render(){
        return(
            <ul>
                <li><a href="/Create" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangeMode("Create");
                }.bind(this)}>Create</a></li>
                <li><a href="/Update" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangeMode("Update");
                }.bind(this)}>Update</a></li>
                <li><input type="button" value = "delete"
                    onClick = {function(e){
                        e.preventDefault();
                        this.props.onChangeMode("Delete");
                }.bind(this)} /></li>
            </ul>
        );
    }
}

module.exports = Control;