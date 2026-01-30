import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import Loading from '../COMPONENTS/Loading';
import { Navigate, Outlet } from 'react-router';
import Locked from '../COMPONENTS/locked';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) return <Loading />;

    if (!user) {

        return <Locked></Locked>;
    }

    return <>{children}</>;
};




export default PrivateRouter;