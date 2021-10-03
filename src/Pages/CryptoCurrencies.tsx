import React from 'react'
import millify from 'millify'
import { Row, Card, Col, Input } from 'antd'
import { RootState } from '../Store/store'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrencies } from '../Store/Feature/CryptoCurrencies'


const CryptoCurrencies = () => {

    const dispatch = useDispatch()
    const cryptoCurrencyState = useSelector((state: RootState) => state.CryptoCurrencies.data)

    React.useEffect(() => {

    }, [])
    return (
        <div>
            <h2>Crypto currenciess</h2>
            <Row >

            </Row>
        </div>
    )
}

export default CryptoCurrencies
