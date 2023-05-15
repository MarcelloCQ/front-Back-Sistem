import { Header } from "../../../containers/Header/Header"
import { Body } from "../../../containers/Body/Body"
import { Menu } from "../../../components/Menu/Menu";

export const Usuarios = () => {
  return (
    <>
      <Header />
      <div className='body-container'>
        <Menu />
        <Body alternativeText={'Body Usuarios'} page='usuarios' />
      </div>
    </>
  )
}
