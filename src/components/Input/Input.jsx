import './Input.css'

export const Input = ({type, className='input-base', name, id, placeholder, onChange}) => {
  return (
    <input onChange={onChange} type={type} className={className} name={name} id={id} placeholder={placeholder} />
  )
}
