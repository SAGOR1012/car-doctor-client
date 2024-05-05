import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  /* context theke user information anar jonne use kora hoyeche */
  const { user, logOut } = useContext(AuthContext)

  const navItems = (
    < >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li><Link to="/userbookings">My Bookings</Link></li>
      {/* {
        user?.email ? <li>
        </li> : <li><Link to='/login'>My Bookings</Link></li>
      } */}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
        console.log(error);

      })
  }
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold ">{navItems}</ul>
      </div>
      <div className="navbar-end gap-3">

        {/* avater */}

        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        {
          user?.email ?
            < button onClick={handleLogOut} className="btn btn-outline btn-error font-bold">Log out</button>
            :
            <Link to='/login'><button className="btn btn-outline btn-error font-bold">Log in</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
