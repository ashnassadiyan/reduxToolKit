import React from 'react'
import { Card, Row, Col, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setActive, setTime } from '../Store/Feature/TablesFeature'
import Table from '../Components/shopComponents/Table'

import { RootState } from '../Store/store'

const Tables = () => {
    const usedispatch = useDispatch()

    const TablesState = useSelector((state: RootState) => state.Tables.tables)

    return (
        <div className="site-card-wrapper">
            <Row gutter={16} style={{ padding: "10px" }}>
                {
                    TablesState.map((t, index: number) => (
                        <Table {...t} index={index} />
                    ))
                }
            </Row>
        </div >
    )
}

export default Tables
