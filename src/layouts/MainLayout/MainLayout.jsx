import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="bg-base-200">
            <Navbar/>
            </div>
            <div className="min-h-screen">
                <Outlet/>
                </div>
            <div><Footer/></div>
            
            
            
        </div>
    );
};

export default MainLayout;