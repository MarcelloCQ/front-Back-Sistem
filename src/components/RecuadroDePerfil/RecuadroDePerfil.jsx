import { useSelector } from "react-redux"
import "./RecuadroDePerfil.css"
import { FotoPerfil } from "../FotoPerfil/FotoPerfil";
import { useEffect, useState } from "react";
import { getFotoPerfil } from "../../services/api.methods";

export const RecuadroDePerfil = () => {

  const nombreUsuario = useSelector(state => state.user.data.nombres);
  const apellidoUsuario = useSelector(state => state.user.data.apellidos);
  const idUsuario = useSelector(state => state.user.data.codigo);

  const [fotoPerfil, setFotoPerfil] = useState('')

  useEffect(() => {
    const fotoDePerfil = async(id) => {
      const response = await getFotoPerfil(id);
      setFotoPerfil(response);
    }

    fotoDePerfil(idUsuario);
  }, [idUsuario])
  
  return (
    <div className='recuadro-de-perfil-container'>
      <FotoPerfil
        width={90}
        height={70}
        src={fotoPerfil}
      />
      <p className='nombres-de-perfil-p'>{`${nombreUsuario} ${apellidoUsuario}`}</p>
    </div>
  )
}
