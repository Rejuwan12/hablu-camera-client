
import { NavLink } from "react-router";
import useAuth from './../../hooks/useAuth';


const UserDropdown = () => {
    const {user, Logout} = useAuth();
    const handleLogout =()=>{
        Logout()
    }
  return (
    <div className="dropdown dropdown-end ">
  <div tabIndex={0} role="button" className="m-1 btn"><div className="avatar">
  <div className="w-10 rounded-full ">
    <img src={`${user?.photoURL || "/public/user.png"}`} />
  </div>
</div>
</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 flex flex-col gap-2">
    
    <button className="w-full px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none"><NavLink to={"/dashboard/overview"}>Dashboard</NavLink></button>
    <button onClick={handleLogout} className="w-full px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none">Logout</button>
  </ul>
</div>
  )
}

export default UserDropdown
