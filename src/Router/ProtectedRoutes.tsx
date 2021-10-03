import React from 'react'
import { RouteProps, Route } from 'react-router-dom'

const ProtectedRoutes: React.FC<RouteProps> = ({ ...props }: RouteProps) => <Route {...props} />


export default ProtectedRoutes
