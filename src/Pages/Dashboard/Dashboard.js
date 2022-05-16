import React from "react";
import { Link, Outlet} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../hooks/useAdmin";
import auth from '../../firebase.init'

const Dashboard = () => {

  const [user] = useAuthState(auth)
  const [admin] =useAdmin(user)

  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashboardSidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <h2 className="text-2xl text-purple-500">
            Welcome to your Dashboard
          </h2>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="dashboardSidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Review</Link>
            </li>
            { 
             admin && <li> <Link to="/dashboard/users">All Users</Link>
            </li>
            
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
