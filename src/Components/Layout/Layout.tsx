import React from 'react'

interface LayoutI {
    children: React.ReactNode
}

const Layout: React.FC<LayoutI> = ({ children }) => {
    return (
        <div>
            {
                children
            }

        </div>
    )
}

export default Layout
