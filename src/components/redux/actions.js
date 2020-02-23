import {ADD_TASK, DEL_TASK, ADD_ITEMS, EDIT_INPUT, EDIT_ITEM} from "./actionTypes";
import axios from 'axios';

export function add(text) {
    return {
        type: ADD_TASK,
        payload: text
    }
}

export function addItems(arr) {
    return {
        type: ADD_ITEMS,
        payload: arr
    }
}

export function del(index) {
    return {
        type: DEL_TASK,
        payload: index
    }
}

export function edit(e) {
    return {
        type: EDIT_INPUT,
        payload: e.target.value
    }
}

export function editItem(item, index) {
    return {
        type: EDIT_ITEM,
        payload: item,
        index: index
    }
}

export function getItems() {
    return (dispatch) => {
        axios.get(`https://dev.sboxcrm.com/ajax/task`).then(res => {
            dispatch(addItems(res.data.items))
        })
    }
}

export function addTask(obj) {
    return (dispatch) => {
        axios.post(`https://dev.sboxcrm.com/ajax/task`, obj).then(res => {
            if(res.status === 200 || res.status === 201 || res.status === 204){
                dispatch(add(res.data))
            }
        })
    }
}

export function editTask(obj, index) {
    return (dispatch) => {
        obj.status_id = (obj.status_id) === 3 ? 4 : 3;
        axios.put(`https://dev.sboxcrm.com/ajax/task/${obj.id}`, obj).then(res => {
            if(res.status === 200 || res.status === 201 || res.status === 204){
                dispatch(getItems())
            }
        })
    }
}

export function delItem(id) {
    return (dispatch) => {
        if(window.confirm("Удалить задачу?")){
            axios.delete(`https://dev.sboxcrm.com/ajax/task/${id}`).then(res => {
                if(res.status === 200 || res.status === 201 || res.status === 204){
                    dispatch(getItems())
                }
            })
        }
    }
}