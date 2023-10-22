import React from 'react';
import { userRoles } from '../utils/acl';
import AdminDashboard from './admin-dashboard';
import UserDashboard from './user-dashboard';
import { User } from '../utils/user.interface';

const Dashboard = ( { user }: { user: User }) => {
  return (
    <div >
      {user.role === userRoles.admin ? (
<AdminDashboard user={user} />
      ) : (
        <UserDashboard  user={user} />
      )}
    </div>
  );
};

export default Dashboard;




