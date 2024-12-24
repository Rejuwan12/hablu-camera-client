import { Link } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className=" navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">Hablu Camera</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <Link to={'/login'}><button
            className="w-full px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none "
          >
            Signin
          </button></Link>
          <Link to={'/register'}>
          <button
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Signout
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
