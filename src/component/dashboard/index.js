import { Button } from 'antd'
import React from 'react'

const DashboardComponent = (props) => {
    return (
        <div className='container'>
            <h1>DashboardComponent</h1>
            <Button type='primary' onClick={props.onLogout}>LogOut</Button>
        </div>
    )
}


export default DashboardComponent