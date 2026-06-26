import React from 'react'
import { getUserFromStorage } from '../../utils/GetUserFromStorage';
import { Navigate } from 'react-router-dom';

export const AuthRoute = ({children}) => {
    const token = getUserFromStorage();
    if(token){
        return children;
    }else{
        return <Navigate to='/login'/>;
    }
}
