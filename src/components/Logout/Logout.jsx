import { useDispatch } from 'react-redux'
import { resetUser } from '../../redux/features/user/userSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../routes/routes'
import { manejadorTrue } from '../../redux/features/manejadorMenu/manejadorSlice'
import './Logout.css'

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove('authcookie');
    dispatch(manejadorTrue("inactive"));
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  }
  return (
    <div className='button-standar-container'>
      <button className='button-standar' onClick={() => logout()}>Cerrar Sesión</button>
    </div>
  )
}
