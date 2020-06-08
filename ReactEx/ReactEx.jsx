const React = require('react');
const { Component } = React;
const Title = require('./Components/Title.jsx');
const TOC = require('./Components/TOC.jsx');
const ReadContent = require('./Components/ReadContent.jsx');
const Control = require('./Components/Control.jsx');
const CreateContent = require('./Components/CreateContent.jsx');
const UpdateContent = require('./Components/UpdateContent.jsx');

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

    getReadContent(){
        for(var i = 0; i < this.state.contents.length; i++){
            if(this.state.select === this.state.contents[i].id){
                return this.state.contents[i];
            }
        }
    }

    render(){
        var _title, _desc, _content;

        if(this.state.mode === 'Welcome'){
            _title = this.state.Welcome.title;
            _desc = this.state.Welcome.desc;
            _content = <ReadContent title = {_title} desc = {_desc} />
        } else if(this.state.mode === 'Read'){
            _content = <ReadContent title = {this.getReadContent().title}
                desc = {this.getReadContent().desc} />
        } else if(this.state.mode === "Create"){
            _content = <CreateContent onCreate = {function(ntitle, ndesc){
                this.maxContent+=1;
                var nContent = this.state.contents.concat({id : this.maxContent,
                 title : ntitle, desc : ndesc});
                 this.setState({
                     contents : nContent,
                     mode : 'Read',
                     select : this.maxContent
                 })
            }.bind(this)}>
            </CreateContent>
        } else if(this.state.mode === "Update"){
            _content = <UpdateContent data = {this.getReadContent()}
            onUpdate = {function(_id, _title, _desc){
                var _contents = Array.from(this.state.contents);
                for(var i = 0; i <_contents.length; i++){
                    if(_contents[i].id === _id){
                        _contents[i] = {id : _id, title : _title, desc : _desc};
                        break;
                    }
                }
                this.setState({contents : _contents, mode : 'Read'});
            }.bind(this)}
            />  
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
                    if(_mode === 'Delete'){
                        if(window.confirm('really')){
                            var _contents = Array.from(this.state.contents);
                            for(var i = 0; i < _contents.length; i++){
                                if(_contents[i].id === this.state.select){
                                    {console.log(i)}
                                    _contents.splice(i, 1);
                                    break;
                                }
                            }
                            this.setState({mode : 'Welcome', contents : _contents})
                        }
                    } else{
                        this.setState({mode : _mode})
                    }
                }.bind(this)}></Control>
                {_content}
            </div>
        );
    }
}

module.exports = ReactEx;