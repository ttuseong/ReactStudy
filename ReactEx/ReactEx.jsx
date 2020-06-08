const React = require('react');
const { Component } = React;
const Title = require('./Components/Title.jsx');
const TOC = require('./Components/TOC.jsx');
const ReadContent = require('./Components/ReadContent.jsx');
const Control = require('./Components/Control.jsx');
const CreateContent = require('./Components/CreateContent.jsx');

class ReactEx extends Component{
    constructor(props){
        super(props);
        this.maxContent = 3;
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
        var _title, _desc, _content;

        if(this.state.mode === 'Welcome'){
            _title = this.state.Welcome.title;
            _desc = this.state.Welcome.desc;
            _content = <ReadContent title = {_title} desc = {_desc} />
        } else if(this.state.mode === 'Read'){
            for(var i = 0; i < this.state.contents.length; i++){
                if(this.state.select === this.state.contents[i].id){
                    _title = this.state.contents[i].title;
                    _desc = this.state.contents[i].desc;
                    _content = <ReadContent title = {_title} desc = {_desc} />
                    break;
                }
            }
        } else if(this.state.mode === "Create"){
            _content = <CreateContent onCreate = {function(ntitle, ndesc){
                this.maxContent+=1;
                var nContent = this.state.contents.concat({id : this.maxContent,
                 title : ntitle, desc : ndesc});
                 this.setState({
                     contents : nContent
                 })
            }.bind(this)}>
            </CreateContent>
        }
        return (
            <div>
                <Title title = {this.state.Welcome.title} desc = 
                    {this.state.Welcome.desc} 
                    onChangePage = {function(){
                        this.setState({ mode : 'Welcome'})
                    }.bind(this)}
                />
                <TOC data = {this.state.contents} 
                    onChangePage = {function(id){
                        this.setState({mode : 'Read', select : Number(id)})
                }.bind(this)}/>
                <Control onChangeMode = {function(_mode){
                    this.setState({mode : _mode})
                }.bind(this)}></Control>
                {_content}
            </div>
        );
    }
}

module.exports = ReactEx;