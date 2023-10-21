// {
//     admin: ['module1', 'module2'],
//     user: ['module2'],
//   };

export const userRoles = {
    ADMIN: 'admin',
    USER: 'user',
  };
  
  export const permissions = {
    ADMIN: {
      module1: true,
      module2: true,
    },
    USER: {
      module1: true,
      module2: false,
    },
  };