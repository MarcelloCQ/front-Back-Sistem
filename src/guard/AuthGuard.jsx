// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../routes/routes";
import { cookieExist } from "../utilities/ComprobacionDeCookie";
import { useSelector } from "react-redux";

export const AuthGuard = () => {
  const tokenSession = useSelector( state => state.user.tokenSession)
  return cookieExist('authcookie') && tokenSession ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
};
