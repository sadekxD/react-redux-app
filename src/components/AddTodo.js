import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { connect } from 'react-redux';

function AddTodo(props) {
    const [input, setInput] = useState('');

    const updateInput = e => {
        setInput(e.target.value)
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        props.addTodo(input)
        setInput("");
    }

    return(
        <div>
            <form onSubmit={handleAddTodo}>
                <input
                    onChange={updateInput}
                    value={input} 
                />
                <button className="add-todo">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect(null, {addTodo})(AddTodo);