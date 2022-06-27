import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login';
import Info from './Info';

const Admin = () => {
    const { validationUser } = useSelector(state => state);
    
    return (
        <div>
            {
                validationUser
                    ? <Info />
                    : <Login />
            }
        </div>
    )
}

export default Admin