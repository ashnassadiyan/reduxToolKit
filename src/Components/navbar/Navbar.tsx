import React from 'react'
import { Button } from 'semantic-ui-react'
import { Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined, UserOutlined } from '@ant-design/icons'

import icon from '../images/png-clipart-bitcoin-cash-cryptocurrency-exchange-trade-bitcoin-orange-logo.png'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="log-container">
                <Avatar src={icon} size="large" />
                <Typography.Title className="logo">
                    <Button>Bo</Button>
                </Typography.Title>
            </div>

            <Menu theme={"dark"}>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies" >CryptoCurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges" >Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news" >News</Link>
                </Menu.Item>
                <Menu.Item icon={<UserOutlined />}>
                    <Link to="/user" >User</Link>
                </Menu.Item>
            </Menu>


        </div>
    )
}

export default Navbar
