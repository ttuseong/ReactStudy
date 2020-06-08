const React = require('react');
const { Component } = React;

class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : this.props.data.id,
            title : this.props.data.title,
            desc : this.props.data.desc
        }
    }
    render(){
        return(
            <article>
                <h2>Update</h2>
                <form action="update_process" method = "post"
                    onSubmit = {function(e){
                        e.preventDefault();
                        this.props.onUpdate(
                            this.state.id,
                            this.state.title,
                            this.state.desc
                        );
                    }.bind(this)}>
                    <input type="hidden" name = "id" value = {this.state.id}/>
                     <p><input type="text"
                        name = "title"
                        placeholder = "title"
                        value = {this.state.title}
                        onChange = {function(e){
                            this.setState({title : e.target.value})
                        }.bind(this)}
                    /></p>
                    <p><textarea name="desc" placeholder = "description"
                        value = {this.state.desc}
                        onChange = {function(e) {
                            this.setState({desc : e.target.value})
                        }.bind(this)}
                    ></textarea></p>
                    <p><input type="submit"/></p>
                </form>
            </article>
        );
    }
}

module.exports = UpdateContent;