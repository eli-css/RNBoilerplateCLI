import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from '../actions/types';

const initialState = {
    transactions: [
        { id: 1, title: 'Soup', price: -20 },
        { id: 2, title: 'Amala Soup', price: -40 },
        { id: 3, title: 'Paypal', price: 400 },
        { id: 4, title: 'Bank', price: 20000 },
        { id: 5, title: 'Drink Garri', price: -60 },
    ]
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TRANSACTIONS:
            return {
                ...state,
                transactions: [payload, ...state.transactions],
            };
        case DELETE_TRANSACTIONS:
            return {
                ...state,
                transactions:  state.transactions.filter(transactions => transactions.id !== payload),
            };
        default:
            return state;
    }
}