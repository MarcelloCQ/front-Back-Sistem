import { Menu } from "../../../components/Menu/Menu"
import { Body } from "../../../containers/Body/Body"
import { Header } from "../../../containers/Header/Header"

export const Caja = () => {
  return (
    <>
      <Header />
      <div className='body-container'>
        <Menu />
        <Body page='caja' />
      </div>
    </>
  )
}
