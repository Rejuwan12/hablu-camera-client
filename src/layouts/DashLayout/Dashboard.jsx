import { Outlet } from "react-router";
import Sidebar from "../../components/dashboards/Sidebar";

const Dashboard = () => {
    return (
        <div className="grid lg:grid-cols-12">
      <div className="col-span-2">
        <Sidebar/>
      </div>
      <div className="col-span-10 p-12">
        <Outlet/>
      </div>
    </div>
    );
};

export default Dashboard;