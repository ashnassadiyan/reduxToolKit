import React from 'react'
import { Card, Row, Col, Button } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '../Store/store'
import { useLocation } from 'react-router-dom'


const TableOrder: React.FC = () => {


    React.useEffect(() => {

    }, [])

    const tableOrderState = useSelector((state: RootState) => state.Tables.tables)
    const productsState = useSelector((state: RootState) => state.Products.produts)
    return (
        <div>

            <Row>
                <Col span={12}>
                    <Card title="On going Items">
                        {
                            tableOrderState.map((o, index) => (
                                <div>

                                </div>
                            ))
                        }
                    </Card>
                </Col>
                <Col span={12}>{
                    <Card title="Products">
                        {
                            productsState.map((m, index) => (
                                <div>
                                    {m.name}
                                    <Button>Add</Button>
                                </div>
                            ))
                        }
                    </Card>

                }</Col>

            </Row>

        </div>
    )
}

export default TableOrder
