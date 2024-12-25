/* eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../../pages/Loading/LoadingPage';
import useAuth from './../../hooks/useAuth';
const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth();
    const location = useLocation();

    if(loading){
        return <LoadingPage/>
    }
    if(user){
        return children
    }

    return <Navigate to={'/'} state={{from:location}} replace/>
};

export default PrivateRoute;