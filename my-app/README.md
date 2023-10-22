# Project Name

My login App

# About

Here I have implemented an app for user authentication and access control in a React application using JSON data for user credentials (username, password, active_module, role) and Access Control List (ACL).
I have provided the credential details for admin and user in the login page itself, after login using the provided credentials they will be redirected to their respective dashboard.I have also provided role based Access Control List in with the admin have access to both module1 and module2 but the user have only access to module1.


## Features

- User Authentication and Access Control
  - Secure login with user credentials
  - Role-based access control (ACL)
- Intuitive User Interface
  - Designed for different user roles
  - Responsive design
- Error Handling
  - User-friendly error messages
  - Secure practices to prevent security vulnerabilities


### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager installed.

## Getting Started

First, run the development server:
(do npm i in the terminal)
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


### Installation

1. Clone the repository:

   git clone https://github.com/princysivakumar/LOGIN-PAGE-REACT-PROJECT.git


## Folder Structure

my-app/
├── components/
│   ├── LoginForm.tsx
│   ├── Dashboard.tsx
│   ├── ModuleA.tsx
│   ├── ModuleB.tsx
|   ├── AdminDashboard .tsx
|   |   UserDashboard .tsx
│  
├── page.tsx
├── utils/
│   ├── interfaces.tsx
│   ├── acl.tsx
├── ...


## Technologies

Next.js
React
React Router

## Contribution

created by- Princy S (princysivakumar123@gmail.com)
Contributions are welcome! Please feel free to open an issue or submit a pull request to improve this project.

