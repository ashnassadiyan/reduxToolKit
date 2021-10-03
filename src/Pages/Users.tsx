import React from 'react'
import { RootState } from '../Store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser, removeAll } from '../Store/Feature/UserFeature'
import { create } from '../Store/Feature/ExchangesFeature'
import axios from '../Services/CryptoApi'


const Users: React.FC = () => {

    React.useEffect(() => {

        axios.get('/exchanges').then(res => {
            dispatch(create(res.data.data.exchanges))
            console.log(res.data.data.exchanges)
        }).catch(res => {
            console.log(res)
        })

    }, [])


    const reservationState = useSelector((state: RootState) => state.Exchanges.exchanges)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Users</h1>
            {/* <button onClick={() => dispatch(addUser("our Baby"))}>add</button>
            <button onClick={() => dispatch(removeAll())}>remove All</button> */}
            {
                reservationState.map((m) => (
                    <div>
                        <h1>{m.description}</h1>
                        {/* <button onClick={() => dispatch(removeUser(m))}> remove</button> */}
                    </div>
                ))
                // reservationState.toString()

            }
        </div>
    )
}

export default Users
