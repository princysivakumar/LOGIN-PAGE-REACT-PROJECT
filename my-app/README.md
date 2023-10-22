
## Getting Started
(do npm i in the terminal)
First, run the development server:

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

## About Project

Here I have implemented an app for user authentication and access control in a React application using JSON data for user credentials (username, password, active_module, role) and Access Control List (ACL).
I have provided the credential details for admin and user in the login page itself, after login using the provided credentials they will be redirected to their respective dashboard.I have also provided role based Access Control List in with the admin have access to both module1 and module2 but the user have only access to module1.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
