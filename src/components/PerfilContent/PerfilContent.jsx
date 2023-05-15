import { useEffect, useState } from 'react'
import { FotoPerfil } from '../../components/FotoPerfil/FotoPerfil'
import { getFotoPerfil, postFotoPerfil } from '../../services/api.methods'
import { useSelector } from 'react-redux'
import { ImportXlsx } from '../../components/Import/ImportXlsx'
import './PerfilContent.css'

export const PerfilContent = ({title}) => {
  
  const idUsuario = useSelector(state => state.user.data.codigo);
  const [fotoPerfil, setFotoPerfil] = useState('')
  const [urlFotoPerfil, setUrlFotoPerfil] = useState('');
  const [formData, setFormData] = useState(null)

  const handlerFileChange = (e) => {
    if(e.target.files[0]) {
      setFormData(e.target.files)
      setFotoPerfil(true)
      const reader = new FileReader();
      reader.onload = (e) => {
        setUrlFotoPerfil(e.target.result);
      }
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFotoPerfil(false);
    }
  };

  const grabarFotoPerfil = async(id, formData) => {
    const response = await postFotoPerfil(id, formData);
    console.log(response)
    if(response.status > 199 || response.status < 400) {
      alert(`${response.data.data}`)
      location.reload();
    }
    if(response.status > 399) {
      alert(`${response.response.data.error}`)
    }
  }

  useEffect(() => {
    const fotoDePerfil = async(id) => {
      const response = await getFotoPerfil(id);
      setFotoPerfil(response);
    }

    fotoDePerfil(idUsuario);
  }, [idUsuario])

  return (
    <>
      <h2>{title}</h2>
      <div className='foto-perfil-container'>
        {
          urlFotoPerfil !== '' &&
            <div className='foto-perfil-container'>
              <img width={200} height={200} src={urlFotoPerfil} alt='foto de perfil que se eligió para cargar a la cuenta del trabajador' />
            </div>
        }
        {
          urlFotoPerfil === '' &&
            <FotoPerfil width={200} height={200} src={fotoPerfil}/>
        }
        
      </div>
      <ImportXlsx text={`Selecciona una foto con extension jpg`} handlerFileChange={handlerFileChange} />
      <button onClick={() => grabarFotoPerfil(idUsuario, formData)}>Cargar foto de perfil</button>
    </>
  )
}
