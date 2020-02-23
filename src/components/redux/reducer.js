import {ADD_ITEMS, ADD_TASK, ASYNC_ADD, DEL_TASK, EDIT_INPUT} from './actionTypes';

const initialState = {
    tasks: [],
    value: ''
};

function delTask(s,i) {
    let state = s;
    delete state[i];
    return state;
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK: return {
            tasks: [action.payload, ...state.tasks],
            value: ''
        };
        case DEL_TASK: return {
            tasks: delTask(state.tasks, action.payload),
            value: state.value
        };
        case ADD_ITEMS: return {
            tasks: action.payload,
            value: state.value
        };
        case EDIT_INPUT: return {
            tasks: state.tasks,
            value: action.payload
        }

        default: return  state
    }
}