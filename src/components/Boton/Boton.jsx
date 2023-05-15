import './Boton.css'

export const Boton = ({name, className, id, onClick}) => {
  return (
    <button className={className} onClick={onClick} id={id} name={name} >{name}</button>
  )
}
