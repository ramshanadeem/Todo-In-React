import React from 'react'
import Header from './Header';
import AddToDo from './AddToDo';
import OnOff from './OnOff';
import PlusMinus from './PlusMinus';
import Toggle1 from './Toggle1';

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [{ title: 'Breakfast', id: 1 },
                { title: 'prepare for class', id: 2 },
                { title: 'take a ride', id: 3 }]
        }
    }
    addtodo = (newtodo) => {
        console.log('add new todo ')
        console.log(newtodo)
        let newTodos = [...this.state.todos]
        newTodos.push(newtodo)
        this.setState({
            todos: newTodos

        })

    }
    deletetodo = (id) => {
        console.log(id)
        let newobj = [...this.state.todos]
        let newTodos = newobj.filter(item => item.id != id)
        this.setState({
            todos: newTodos

        })

    }
    // addColor = (color) => {
    //     <div style={{ background: 'black' }}>
    //     </div>
    //     console.log(color)}

    render() {
        return (
            <div>
                <Header />
                <AddToDo addtodo={this.addtodo} />

                <ul> {this.state.todos.map(
                    item => (
                        <li key={item.id}> {item.title}
                            <button key={item.id} onClick={() => this.deletetodo(item.id)}>X</button>
                        </li>
                    )
                )}</ul>
                <OnOff />
                <PlusMinus />
                <Toggle1 />
            </div >
        )
    }
}
export default ToDoList;
