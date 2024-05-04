import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";
import { AiFillNotification } from "react-icons/ai";

/* bivinno jahay same jinis use korar jonne context baano hoyche */
export const AuthContext = createContext();
/* firebase rtheke anahoyeche  */
const auth = getAuth(app);

/* ei provider j use korbe tar peter moddhe ja thakbe sita ei children er maddome ekhane use kore call kora jabe */
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /* Create user or sign up */
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    /* Sign in */
    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    //*Current user k dhore rakhe screen a. page load dileo user theke jay .sei jonne eita use koa hoyeche 
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)
        })

    }, [])

    const authInfo = {
        user,
        loading,
        createUser, singInUser
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
