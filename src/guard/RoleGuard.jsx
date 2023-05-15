import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "../routes/routes";

export const RoleGuard = ({myRol}) => {

  const rol = useSelector(state => state.user.data.rol);

  for(let i = 0; i < myRol.length; i++) {
    if(myRol[i] === rol) {
      return <Outlet />
    }
  }
  return <Navigate replace to={`/private/${PrivateRoutes.PERFIL}`} />
}
