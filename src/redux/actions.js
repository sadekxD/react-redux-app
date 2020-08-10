import * as actions from './actionTypes';

let nextTodoId = 0;

export const addTodo = content => {
    return {
        type: actions.ADD_TODO,
        payload: {
            id: ++nextTodoId,
            content,
        }
    }
};

export const toggleTodo = id => {
    return {
        type: actions.TOGGLE_TODO,
        payload: { id }
    }
};

export const setFilter = filter => {
    return {
        type: actions.SET_FILTER,
        payload: { filter }
    }
}