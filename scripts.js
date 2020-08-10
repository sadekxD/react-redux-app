const cs = require('classnames');

const initialState = {
    id: [],
    dict: {}
}

action = {payload: {
    id: 4
}}

const foo = (state = initialState) => {
    const { id } = action.payload;
    return {
        ...state,
        id: [...state.id, id],
        dict: {
            ...state.dict,
            // [id]: {
            //     name: state.name
            // }
        }
    }
};

a = foo({id:[1], name: 'janina'})

cls = cs({"sadek": true}, {irfan: true})

console.log(cls)