import React from 'react'
import { Card, Col, Button } from 'antd'
import { TablesI } from '../../Store/Feature/TablesFeature'
import { useDispatch } from 'react-redux'
import { setActive } from '../../Store/Feature/TablesFeature'
import { Link } from 'react-router-dom'

interface TableI extends TablesI {
    index: number
}

const Table: React.FC<TableI> = ({ ...props }) => {

    const usedispatch = useDispatch()

    const [timer, setTimer] = React.useState(1)
    const [isActive, setIsActive] = React.useState(false)
    const [isPaused, setIsPaused] = React.useState(false)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes: any = `${Math.floor(timer / 60)}`
        const getMinutes: any = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
        <Col style={{ margin: "10px" }}>
            <Card hoverable title={props.tableName} style={{ width: 300 }}>
                Tables Status:{props.status ? "In Use" : "Can Uses"}
                <Button onClick={() => {
                    handleStart()
                    usedispatch(setActive(props.index))
                }}
                    disabled={props.status ? true : false}>
                    Use
                </Button>
                <p>{formatTime()}</p>
                <Button >
                    <Link to={`/tableorder?index=${props.index}`}>Orders</Link>
                </Button>
            </Card>
        </Col >
    )
}

export default Table
