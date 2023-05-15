import { Menu } from "../../../components/Menu/Menu"
import { Body } from "../../../containers/Body/Body"
import { Header } from "../../../containers/Header/Header"

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='body-container'>
        <Menu />
        <Body alternativeText={'Body Dashboard'} page='dashboard' />
      </div>
    </>
  )
}
