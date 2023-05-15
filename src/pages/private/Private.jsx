import { Navigate, Route } from 'react-router-dom'
import { PrivateRoutes } from './../../routes/routes'
import { RoutesWithNotFound } from '../../utilities/RoutesWithNotFound'
// Administracion
import { Usuarios } from './Administracion/Usuarios'
import { Dashboard } from './Administracion/Dashboard'
// Cuenta
import { Perfil } from './Cuenta/Perfil'
import { useSelector } from 'react-redux'
import { RoleGuard } from '../../guard/RoleGuard'
import { role } from '../../utilities/Perfiles'
import { Caja } from './Gestion/Caja'

function Private() {
  

  const admin = [role.admin];
  const adminNSupp = [role.admin, role.sup];
  const everybody = [role.admin, role.sup, role.agent];
  const rol = useSelector(state => state?.user?.data?.rol);

  return (
      <RoutesWithNotFound>
        <Route path='/' element={ rol === 'Agente' ? <Navigate to={PrivateRoutes.PERFIL} /> : <Navigate to={PrivateRoutes.USUARIOS} />} />
        <Route element={ <RoleGuard myRol={admin} /> }>
          <Route path={PrivateRoutes.USUARIOS} element={<Usuarios />} />
        </Route>
        <Route element={ <RoleGuard myRol={adminNSupp} /> }>
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        </Route>
        <Route element={ <RoleGuard myRol={everybody} /> }>
          <Route path={PrivateRoutes.PERFIL} element={<Perfil />} />  
          <Route path={PrivateRoutes.CAJA} element={<Caja />} />
        </Route>
      </RoutesWithNotFound>
  );
};

export default Private;