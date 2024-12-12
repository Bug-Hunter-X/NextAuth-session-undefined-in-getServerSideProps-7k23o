```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]'; // Corrected import path

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session
    }
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>You are logged in! Email: {session.user.email}</p>
      ) : (
        <p>You are not logged in!</p>
      )}
    </div>
  );
}
```