import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-[20%] bg-pink-300 rounded-lg mx-5 px-10">
                <ul className="text-4xl font-semibold space-y-5">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/editprofile">EditProfile</Link>
                    </li>
                </ul>
            </div>
            <div className="w-[20%] ml-10 text-2xl">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;