import './ImportXlsx.css'

export const ImportXlsx = ({handlerFileChange, text}) => {
  return (
    <div className='input-container'>
      <span>{text}</span>
      <input className='input-file' type='file' onChange={handlerFileChange} />
    </div>
  )
}
