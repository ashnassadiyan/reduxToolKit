import { Switch } from "react-router-dom"
import { Dashboard, Users, Exchanges, CryptoCurrencies, CryptoDetails, News, NotFound, Shop, Tables, Products, TableOrder } from '../Pages'
import ProtectedRoutes from "./ProtectedRoutes"
import React from 'react'

const Routes = () => {
    return (
        <div>

            <Switch>
                <ProtectedRoutes component={Dashboard} path="/" exact />
                <ProtectedRoutes component={Users} path="/user" exact />
                <ProtectedRoutes component={Exchanges} path="/exchanges" exact />
                <ProtectedRoutes component={CryptoCurrencies} path="/cryptocurrencies" exact />
                <ProtectedRoutes component={CryptoDetails} path="/crypto/:coinId" exact />
                <ProtectedRoutes component={News} path="/news" exact />
                <ProtectedRoutes component={Shop} path="/shop" exact />
                <ProtectedRoutes component={Tables} path="/tables" exact />
                <ProtectedRoutes component={Products} path="/products" exact />
                <ProtectedRoutes component={TableOrder} path="/tableorder" exact />
                <ProtectedRoutes component={NotFound} path="*" exact />

            </Switch>

        </div>
    )
}

export default Routes


