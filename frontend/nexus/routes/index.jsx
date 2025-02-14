import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
 } from 'react-router-dom';

import Protected from './protected.jsx';
import { isAuthenticated } from './helpers.jsx';
import LandingPage from '../pages/landing-page/landing-page.jsx';
import Signup from '../pages/auth/signup.jsx';
import Login from '../pages/auth/login.jsx';
import NotFound from '../pages/error/404-page.jsx';
import Dashboard from '../pages/dashboard/dashboard.jsx';
import Events from '../pages/events/events.jsx';
import Users from '../pages/user/users.jsx';
import PasswordResetForm from '../components/Auth/PasswordReset.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Protected />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="events" element={<Events />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route
        path="/"
        element={<LandingPage />}
        loader={async () => await isAuthenticated()}  
      />
      <Route
        path="auth/login"
        element={<Login />}
        loader={async () => await isAuthenticated()}
      />
      <Route
        path="auth/signup"
        element={<Signup />}
        loader={async () => await isAuthenticated()}
      />
      <Route
        path="auth/reset-password"
        element={<PasswordResetForm />}
        loader={async () => await isAuthenticated()}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;