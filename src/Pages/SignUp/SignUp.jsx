import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import Swal from "sweetalert2";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const SignUp = () => {
    /* create a context for call sigup function   */
    const { createUser } = useContext(AuthContext)

    /* error message display te show koranor  jonne ei state use kora hoyeche */
    const [signUpError, setSignUpError] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        /* reset error message */
        setSignUpError('');

        /* password length */
        if (password.length < 5) {
            setSignUpError('minimum password length 5 or longer');
            return;
        }
        /*create a new user or Sign up  */
        createUser(email, password)
            .then((result) => {
                console.log(result.user);

                /* update profile */
                updateProfile(result.user, {
                    displayName: name
                }).then(() => console.log('profile updated'))
                    .catch((error) => {
                        console.log(error);

                    })

                /* send verifications link in email */
                sendEmailVerification(result.user) //current user = result.user
                    /* success sign up alert */
                    .then(() => {
                        console.log("check your email");
                        Swal.fire({
                            position: "center",
                            text: "Check Your Email",
                            icon: "success",
                            title: "Send a verification link ",
                            showConfirmButton: false,
                            timer: 50000
                        });
                    })
            }).catch((error) => {
                console.log(error);
                setSignUpError(error.message)
            })

    };
    return (
        <div>
            <div></div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2 mr-12  ">
                        <img src={img} alt="" />
                    </div>
                    {/* ................. form section  */}
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                            <h1 className="text-2xl font-bold text-center">Sign Up</h1>

                            <form onSubmit={handleSignUp} noValidate="" className="space-y-6">
                                <div className="space-y-1 text-sm">
                                    <label
                                        htmlFor="name"
                                        className="block dark:text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="name"
                                        required
                                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                                    />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label
                                        htmlFor="email"
                                        className="block dark:text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="email"
                                        required
                                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                                    />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label
                                        htmlFor="password"
                                        className="block dark:text-gray-600">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        required
                                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                                    />

                                </div>
                                <input
                                    className="block btn rounded-xl bg-red-500 text-white w-full p-3 text-center "
                                    type="submit"
                                    value="SignUp"
                                />
                            </form>

                            {/* error message */}
                            {

                                signUpError && <p className=" text-red-500">{signUpError}</p>

                            }

                            <p className="text-xs text-center sm:px-6 dark:text-gray-600">
                                Already have an account?
                                <Link to='/login'
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="underline dark:text-gray-800">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;