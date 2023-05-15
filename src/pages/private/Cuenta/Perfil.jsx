import { Menu } from "../../../components/Menu/Menu"
import { Body } from "../../../containers/Body/Body"
import { Header } from "../../../containers/Header/Header"

export const Perfil = () => {
  return (
    <>
      <Header />
      <div className='body-container'>
        <Menu />
        <Body alternativeText={'Datos de Perfil'} page='perfil' />
      </div>
    </>
  )
}
