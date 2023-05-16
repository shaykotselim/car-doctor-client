import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    
    if(loading){
       return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }

    return <Navigate to="/sign-in" state={{from:location}} replace></Navigate>;
};

export default PrivetRoute;