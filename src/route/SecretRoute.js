import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext/UserContext';
import Spinner from 'react-bootstrap/Spinner';
const SecretRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()

    if(loader){
       return <p className='text-center'>Loading...</p>

    }
    
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SecretRoute;