const defaultState = {
     customers: [],
}

export const ADD_CUSTOMERS_API = "ADD_CUSTOMERS_API"
const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMERS_API:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMERS:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addCustomersApiAction = (payload) => ({type: ADD_CUSTOMERS_API, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})
