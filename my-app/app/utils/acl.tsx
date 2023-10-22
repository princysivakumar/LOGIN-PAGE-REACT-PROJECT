// {
//     admin: ['module1', 'module2'],
//     user: ['module2'],
//   };

export const userRoles = {
    admin: 'admin',
    user: 'user',
  };
  
  export const permissions = {
    admin: {
      module1: true,
      module2: true,
    },
    user: {
      module1: true,
      module2: false,
    },
  };