import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncActions/getCustomers";
import {asyncDecrementAction, asyncIncrementAction, decrementAction, incrementAction} from "./store/countReducer";
import {fetchUsersAction, removeUserAction} from "./store/userReducer";

function App() {

    const dispatch = useDispatch()

    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const users = useSelector(state => state.users.users)
    const count = useSelector(state => state.counter.count)

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeUser = (customer) => {
        dispatch(removeUserAction(customer.id))
    }
    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <h2>Saga</h2>
                <div className="count">{count}</div>
                <div className="btns">
                    <button className="btn" onClick={() => dispatch(incrementAction())}>+</button>
                    <button className="btn" onClick={() => dispatch(decrementAction())}>-</button>
                    <button className="btn" onClick={() => dispatch(asyncIncrementAction())}>+ with delay</button>
                    <button className="btn" onClick={() => dispatch(asyncDecrementAction())}>- with delay</button>
                    <button className="btn" onClick={() => dispatch(fetchUsersAction())}>Get users by API</button>
                </div>
                <div className="users">
                    {users.map(user =>
                        <div
                            onClick={() => removeUser(user)}
                            style={{cursor: "pointer"}}
                            className="user"
                            key={user.id}
                        >
                            {user.name}
                        </div>
                    )}
                </div>
            <hr></hr>
            <h2>Cash</h2>
            <div className="buttons">
                <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
            </div>
            <span>{cash}</span>
            <hr></hr>
            <h2>Customers</h2>
            <div className="buttons">
                <button onClick={() => addCustomer(prompt())}>Add customer</button>
                <button onClick={() => dispatch(fetchCustomers())}>Get customers by API</button>
            </div>
            {customers.length > 0 ?
                <div className="customers-list">
                    {customers.map(customer =>
                        <span
                            onClick={() => removeCustomer(customer)}
                            style={{cursor: "pointer"}}
                            key={customer.id}
                        >
                            {customer.name}
                        </span>
                    )}
                </div>
                :
                <span>
                    none
                </span>
            }
        </div>
    );
}

export default App;
