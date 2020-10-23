const ADD_ITEM="todo/toDoApp/ADD_ITEM";
const DELETE_ITEM="todo/toDoApp/DELETE_ITEM";
const INPUT_CHANGE="todo/toDoApp/INPUT_CHANGE";
const LIST_ITEM_CLICK="todo/toDoApp/LIST_ITEM_CLICK";

//The initial state of this reducer (will be combined with the states of other reducers as your app grows)
const initialState={
    list:[{item:"test",done:false}],
    newToDo:""
};

export function inputChange(newToDo){
    return {
        type: INPUT_CHANGE,
        value: newToDo
    }
}

export function inputSubmit(event){
    return {
        type: ADD_ITEM,
        event
    }
}

export function listItemClick(index){
    return {
        type: LIST_ITEM_CLICK,
        index
    }
}

export function deleteListItem(index){
    return {
        type: DELETE_ITEM,
        index
    }
}
// a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
export default function reducer(state=initialState, action){
    switch(action.type){
        case ADD_ITEM:
            action.event.preventDefault();
            let item=state.newToDo;
            if(item===""){
                return state;
            }
            return {
                list:[...state.list,{item,done:false}],
                newToDo:""
            };
        case DELETE_ITEM:
            return Object.assign({},state,{list:[...state.list.slice(0,action.index),...state.list.slice(action.index+1)]});
        case INPUT_CHANGE:
            return Object.assign({},state,{newToDo:action.value});
        case LIST_ITEM_CLICK:
            let newList=state.list.slice(0);
            newList[action.index].done=!newList[action.index].done;
            return Object.assign({},state,{list:newList});
        default:
            return state;
    }
}