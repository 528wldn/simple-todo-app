import React, { Component } from 'react'

export class InputTodo extends Component {
    state = {
        title: ""
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        })


    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-container">
                    <input
                        className="input-text"
                        name="title"
                        type="text"
                        placeholder="Add todo.."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input type="submit" className="input-submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default InputTodo
