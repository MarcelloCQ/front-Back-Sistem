import { Caja } from '../../components/Caja/Caja'
import { PerfilContent } from '../../components/PerfilContent/PerfilContent'
import './Body.css'

export const Body = ({page, alternativeText}) => {
  
  if(page === 'perfil'){
    return (
      <main className='main' id='main'>
        <PerfilContent title={'Datos del Perfil'} />
      </main>
    )
  }
  if(page === 'caja'){
    return (
      <main className='main' id='main'>
        <Caja />
      </main>
    )
  } else {
    return (
      <main className='main' id='main'>
        <p>{alternativeText}</p>
      </main>
    )
  }
}
