const {createStore} = Redux;

const store = createStore((state = {count: 0}, action) => {
    
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + (typeof action.incrementBy === 'number' ? action.incrementBy : 1 )}
        case 'DECREMENT':
            return {count: state.count - (typeof action.decrementBy === 'number' ? action.decrementBy : 1 )}
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

