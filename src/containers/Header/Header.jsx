import { Logo } from '../../components/Logo/Logo'
import { AlignJustify } from 'feather-icons-react/build/IconComponents'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { manejadorTrue } from '../../redux/features/manejadorMenu/manejadorSlice';
import { RecuadroDePerfil } from '../../components/RecuadroDePerfil/RecuadroDePerfil';

export const Header = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.manejadorMenu.manejador);

  const handleShowMenu = () => {
    if(state === "active") {
      dispatch(manejadorTrue("inactive"))
    } else if(state === "inactive") {
      dispatch(manejadorTrue("active"))
    }
  };
  
  return (
    <header className='header' id='header'>
      <div className='header-content-container'>
        <Logo
          height={70}
          width={70}
        />
        <div className='recuadro-de-perfil-content-container'>
          <RecuadroDePerfil />
        </div>
        <AlignJustify className='AlignJustifyClass'  color='white' onClick={() => handleShowMenu()}/>
      </div>
    </header>
  )
}
