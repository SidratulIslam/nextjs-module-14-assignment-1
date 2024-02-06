This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


মডিউল ১৪ এর এসাইনমেন্ট (Next.js Back-End & Securities)
Assignment Title: Authentication, Token Handling, and Email Integration in a Next.js Application


 


Assignment Description: You are tasked with building a secure authentication system for a Next.js application. Additionally, you need to implement token handling, email verification, and redirection for unauthorised users. Below are the tasks you need to accomplish:


 




User Registration and Email Verification:




 




Implement a user registration system where users provide their email addresses and passwords.




Upon registration, generate a unique verification token for each user.




Send an email to the user's provided email address containing a link with the verification token. The email should be sent using Nodemailer.




 




Setting Tokens in Headers:




 




Develop a middleware that sets an authentication token in the HTTP headers of requests made by authenticated users. This token should be used to validate user identities.




 




Passing Token with Middleware:




 




Create middleware that intercepts incoming requests to protected routes.




Verify the presence and validity of the authentication token in the request headers.




If the token is valid, allow the request to proceed; otherwise, deny access and redirect the user to a login page or display an appropriate error message.




 




Encoding and Decoding Tokens:




 




Implement functions to encode and decode tokens. The encoding function should create a token with user data, and the decoding function should verify and extract user information from a token.






Redirect to Homepage if Not Logged In:




 




Set up a mechanism to redirect users to the homepage when they attempt to access protected routes without a valid token or if they haven't completed email verification.




Unauthorised users should be redirected to the login or registration page.




 


Your task is to design, develop, and document these features in a Next.js application, ensuring proper user authentication, token handling, email verification, and redirection.


 


Note: You can use any external libraries or frameworks you find suitable for the task, including Nodemailer for sending emails.


 


Assessment Criteria:



Proper implementation of user registration and email verification.



Setting tokens in headers and using middleware for authentication.


Correct encoding and decoding of tokens.

Implementing redirection for unauthorized users.

Integration of Nodemailer for email functionality.

Clarity and organization of code.

Explanation of the code and its functionality.


