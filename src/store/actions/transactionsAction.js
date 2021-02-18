import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './types';

export const addTransaction = ({ id, title, price }) => dispatch => {
    const newTransaction = { id, title, price }

    dispatch({ type: ADD_TRANSACTIONS, payload: newTransaction })

}


export const deleteTransaction = (id) => dispatch => {
    dispatch({ type: DELETE_TRANSACTIONS, payload: id })
}


