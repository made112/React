import React, { Component } from 'react'

class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            text: '',

        }
        this.HandleCheck = this.HandleCheck.bind(this);

    }
    save = (e) => {
        var todos = this.state.todos
        todos.push({ txt: this.state.text, done: false });
        this.setState({ todos });
        

        console.log(this.state.todos)
    }
    HandleUsernameTodo = (event) => {
        this.setState({
            text: event.target.value


        })
    }
    HandleCheck(e) {
        const todos = [...this.state.todos];
        todos[e.target.getAttribute('todo-index')].done = !todos[e.target.getAttribute('todo-index')].done; 
        this.setState({ todos });
    }

    render() {
        return (
            <div className="list">
                <h1> TO-DO List</h1>
                <input onChange={this.HandleUsernameTodo} type="text" />
                <button onClick={this.save} className="btn btn-primary ">Save</button>
                <ul>
                    {
                        this.state.todos.map((todo, index) => {
                            return (
                                <div>
                                    <li id="myH1" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.txt} <input todo-index={index} onClick={this.HandleCheck} type="checkbox" /></li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}



export default Todo
