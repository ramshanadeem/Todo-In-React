import React, { Component } from 'react'

class AddToDo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos:
                [{ title: '', id: '' }]
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("chalnrha")
        let newobj = this.state;
        const { addtodo } = this.props
        addtodo(newobj)
        //this.props.AddToDo(newobj)
    }
    handleChange = (e) => {
        console.log("onchnge")
        console.log(e.target.value)
        this.setState({
            title: e.target.value,
            id: Math.round(Math.random() * 100),
        }
        )
        // console.log(this.state)
    }
    handleDelete = (e) => {
        console.log(e.target.value)
        console.log('dd')
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>  <input type='text' id='title' onChange={this.handleChange} ></input>
                    <button type='submit' >AddToDo</button>
                    <button type='submit' >Delete All</button>
                </form>



            </div >
        )
    }
}
export default AddToDo;
