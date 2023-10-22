import React from 'react';
import { permissions } from '../utils/acl';
import Module1 from './module-1';
import Module2 from './module-2';
import { User } from '../utils/user.interface';

const UserDashboard = ({ user }: { user: User }) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-orange-300'>
      <h1  className=' text-xl font-bold '>Welcome to User Dashboard!</h1>
      <div className=' pt-2 text-red-600 font-semibold '>The user have only access to module 1</div>
      {permissions[user.role].module1 && (
      <div>
          <Module1 />
      </div>
      )}
      {permissions[user.role].module2 && (
        <div>
          <Module2 />
        </div>
      )}
    </div>
  );
};

export default UserDashboard;       
