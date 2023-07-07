import {addCustomersApiAction} from "../store/customerReducer";

export const fetchCustomers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            dispatch(addCustomersApiAction(json));
        } catch (error) {
            alert(`Error fetching customers: ${error}`);
        }
    };
};
