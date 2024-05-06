import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { onChildAdded } from "firebase/database";

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    /* login korar pon location a autometic niye jabe seita thik korar jonne path location lage  */
    const location = useLocation();

    // console.log(location.pathname);

    /* loading show korar jonne  */
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>

    }


    if (user?.email) {
        return children;
    }
    /* login korar por automatic last location a niye jabe jdi state er moddhe location.pathname use kori */
    return (<Navigate state={location.pathname} to='/login' replace></Navigate>);
};

export default PrivetRoute;