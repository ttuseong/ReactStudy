const React = require('react');
const { Component } = React;
const Title = require('./Components/Title.jsx');
const TOC = require('./Components/TOC.jsx');
const Content = require('./Components/Content.jsx');

class ReactEx extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode : 'Read',
            select : 1,
            Welcome : {title : 'Welcome', desc : 'Hello React!'},
            contents : [
                {id : 1, title : 'HTML', desc : 'Hello HTML'},
                {id : 2, title : 'CSS', desc : 'Hello CSS'},
                {id : 3, title : 'JavaScript', desc : 'Hello JavaScript'}
            ]
        }
    }
    render(){
        var _title, _desc;

        if(this.state.mode === 'Welcome'){
            _title = this.state.Welcome.title;
            _desc = this.state.Welcome.desc;
        } else if(this.state.mode === 'Read'){
            for(var i = 0; i < this.state.contents.length; i++){
                if(this.state.select === this.state.contents[i].id){
                    _title = this.state.contents[i].title;
                    _desc = this.state.contents[i].desc;
                }
            }
        }
        return (
            <div>
                <Title title = {this.state.Welcome.title} desc = {this.state.Welcome.desc} 
                    onChangePage = {function(){
                        this.setState({ mode : 'Welcome'})
                    }.bind(this)}
                />
                <TOC data = {this.state.contents} 
                    onChangePage = {function(id){
                        this.setState({mode : 'Read', select : Number(id)})
                }.bind(this)}/>
                <Content title = {_title} desc = {_desc} />
            </div>
        );
    }
}

module.exports = ReactEx;