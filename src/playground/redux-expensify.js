const {createStore, combineReducers} = Redux;

// Actions
/*
ADD_EXPENSE
REMOVE_EXPENSE
EDIT_EXPENSE
SET_TEXT_FILTER
SORT_BY_DATE
SORT_BY_AMOUNT
SET_START_DATE
SET_END_DATE
*/

// Action generator for ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: 'xyz',
        description,
        note,
        amount,
        createdAt
    }
})

// Action generator for REMOVE_EXPENSE
const removeExpense = ({description} = {}) => ({
    type: 'REMOVE_EXPENSE',
    description
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER', 
    text
})

// Expenses reducer

const defaultExpensesState = [];
const expensesReducer = (state = defaultExpensesState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense];
        case 'REMOVE_EXPENSE': 
            return state.filter((expense) => expense.description !== action.description);
        default:
            return state;
    }
}

const defaultFilterState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};
const filterReducer = (state = defaultFilterState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                text: action.text,
                sortBy: state.sortBy,
                startDate: state.startDate,
                endDate: state.endDate
            };
        default:
            return state;
    }
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({description: 'Rent1', amount: 100}));
store.dispatch(addExpense({description: 'Rent2', amount: 100}));
store.dispatch(removeExpense({description: 'Rent2'}));

store.dispatch(setTextFilter('Rent1'));
store.dispatch(setTextFilter('Rent2'));


const demoState = {
    expenses: [{
        id: 'xdreae',
        description: 'January Rent',
        note: 'This was final payment for this address',
        amount: 545000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // valid values amount, date
        startDate: undefined, 
        endDate: undefined
    }
}