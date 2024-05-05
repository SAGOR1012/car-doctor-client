import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    /* loading show korar jonne  */
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>

    }


    if (user?.email) {
        return children;
    }

    return (<Navigate to='/login' replace></Navigate>);
};

export default PrivetRoute;