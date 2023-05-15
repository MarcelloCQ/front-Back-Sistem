import TanjiroKamado from './../../assets/Tanjiro.jpg'
import './Logo.css'

export const Logo = ({height, width}) => {
  return (
    <img className='logo' height={height} width={width} src={TanjiroKamado} />
  )
}
