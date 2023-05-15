import { useSelector } from 'react-redux'
import { Logout } from '../Logout/Logout'
import './Menu.css'
import { NavLink } from 'react-router-dom';
import { PrivateRoutes } from '../../routes/routes';

export const Menu = () => {

  const isShow = useSelector(state => state.manejadorMenu.manejador);

  return (
    <div className={isShow === "active" ? 'menu-container' : 'menu-container-noshow'}>
      <div className='menu-bar-container'>
        <ul>
          
          <li className='li-menu'>
            <NavLink className='anchor-menu' to={`/private/${PrivateRoutes.DASHBOARD}`}>Dashboard</NavLink>
          </li>
          <li className='li-menu'>
            <NavLink className='anchor-menu' to={`/private/${PrivateRoutes.CAJA}`}>Gestion de Caja</NavLink>
          </li>
          <li className='li-menu'>
            <NavLink className='anchor-menu' to={`/private/${PrivateRoutes.USUARIOS}`} active>Usuarios</NavLink>
          </li>
          <li className='li-menu'>
            <NavLink className='anchor-menu' to={`/private/${PrivateRoutes.PERFIL}`}>Mi Perfil</NavLink>
          </li>
          <li className='li-menu'>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  )
}
