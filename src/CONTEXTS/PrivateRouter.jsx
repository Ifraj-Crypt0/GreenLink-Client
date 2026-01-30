import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import Loading from '../COMPONENTS/Loading';
import { Navigate, Outlet } from 'react-router';

const PrivateRouter = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) return <Loading />;

    if (!user) {

        return <Navigate to="/logIn" replace />;
    }

    return <Outlet />;
};




export default PrivateRouter;