# NextAuth session undefined in getServerSideProps

This repository demonstrates a bug where the NextAuth session is undefined in `getServerSideProps` even after successful authentication. The authentication process works correctly, but the session object remains null when accessed within the component.

## Bug Description

The `About` page uses `getServerSideProps` to fetch the NextAuth session.  While the authentication process completes successfully (confirmed through the login/logout flow), the `session` object is undefined within `getServerSideProps`, leading to conditional rendering issues.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Attempt to log in. Notice the login is successful. 
5. Navigate to the `/about` route.  The session will be undefined and the message 'You are not logged in!' will be shown although you are logged in.

## Solution

The solution involves correcting the path to `authOptions` and ensuring it's correctly imported and used. 