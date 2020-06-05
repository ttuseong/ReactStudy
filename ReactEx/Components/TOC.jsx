const React = require('react');
const { Component } = React;

class TOC extends Component{
    render(){
        var list = [];
        for(var i = 0; i < this.props.data.length; i++){
            list.push(
                <li key = {this.props.data[i].id}><a href=""
                    onClick = {function(id, e){
                        e.preventDefault(); 
                        this.props.onChangePage(id);
                    }.bind(this,this.props.data[i].id)}
                >{this.props.data[i].title}</a></li>
            );
        }
        return(
            <ul>
                {list}
             </ul>
        );
    }
}

module.exports = TOC;