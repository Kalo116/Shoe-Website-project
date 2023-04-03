import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const { currentUser } = useContext(UserContext);

    const isAuth = Boolean(currentUser?.uid);
    if (!isAuth) {
        return <Navigate to='/sign-in' replace />
    };

    return <Outlet />;
};