import React from 'react';
import { userRoles } from '../utils/acl';
import AdminDashboard from './admin-dashboard';
import UserDashboard from './user-dashboard';

const Dashboard = ({ user }: any) => {
  return (
    <div >
      {user.role === userRoles.ADMIN ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
    </div>
  );
};

export default Dashboard;



  