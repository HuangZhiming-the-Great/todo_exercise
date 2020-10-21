//The initial state of this reducer (will be combined with the states of other reducers as your app grows)
const initialState={};

// a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
export default function reducer(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}