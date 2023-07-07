const defaultState = {
    users: []
}

export const SET_USERS = "SET_USERS"
export const FETCH_USERS = "FETCH_USERS"
export const REMOVE_USERS = "REMOVE_USERS"

export default function userReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_USERS:
            return {...state, users: action.payload}
        case REMOVE_USERS:
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        default:
            return state
    }
}

export const setUsersAction = payload => ({type: SET_USERS, payload})
export const fetchUsersAction = () => ({type: FETCH_USERS})
export const removeUserAction = (payload) => ({type: REMOVE_USERS, payload})
