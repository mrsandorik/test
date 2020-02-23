import React, {useEffect} from "react";
import {createStore} from "redux";
import {connect} from 'react-redux';
import {add, getItems, del, delItem, edit, addTask, editTask} from "./redux/actions";

const App = props => {
    useEffect(() => {
        props.gItems()
    },[]);

    return <div className="tasks">
        <input className="tasks__input" value={props.value} onChange={e => props.e(e)} />
        <button className="tasks__button" disabled={props.value < 3} onClick={() => props.add(props.value)}>Добавить</button>
        <ul className="list">
            {
                props.tasks.map((item, i) =>
                    <li className={`list__li ${Number(item.status_id) === 4 ? 'list__li--complete' : ''}`}><em onClick={() => props.edTask(item)}>{item ? item.subject : ''}</em> <a className="list__del" onClick={() => props.dItem(item.id)}>x</a></li>
                )
            }
        </ul>
    </div>
};

function mapStateToProps(state, ) {
    return {
        tasks: state.tasks,
        value: state.value
    }
}

function mapDispatchToProps(dispatch) {
    return {
        del: (index) => dispatch(del(index)),
        gItems: () => dispatch(getItems()),
        dItem: (id) => dispatch(delItem(id)),
        e: (e) => dispatch(edit(e)),
        add: (txt) => dispatch(addTask({subject: txt})),
        edTask: (obj, index) => dispatch(editTask(obj, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




/*
const initialState = {
    tasks: [{name:"hello"}]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK": return {
            tasks: [...state.tasks, {name:action.payload}]
        };
        default: return state
    }
};

const store = createStore(reducer);

const addCounter = {
    type: "ADD_TASK",
    payload: "New task"
}

store.subscribe(() => {
    console.log(store.getState())
})

const App = props => {
    return <div>
        <input />
        <button onClick={() => store.dispatch(addCounter)}>Add Task</button>
        <ul>
            {
                store.getState().tasks.map((item, i) =>
                    <li>{item.name} <a>x</a></li>
                )
            }
        </ul>
    </div>
};*/