// import SideBar from '../../components/common/SideBar';
import { Navigate } from "react-router-dom";
import App from '../src/App';

const Protected = () => {
  const token = sessionStorage.getItem("token");

  return token ? 
  <App />
  : <Navigate to="/auth/login"  />;
};

export default Protected;


// import { Navigate, Outlet } from "react-router-dom"

// export default function ProtectedRoute({ isAllowed, redirectTo = "/landing", children }) {
//  if (!isAllowed) {
//   return <Navigate to={redirectTo} />
//  }
//  return children ? children : <Outlet />
// }