import { useState } from 'react'
import { Boton } from '../Boton/Boton'
import { Input } from '../Input/Input'
import './Caja.css'
import { serachProduct } from '../../utilities/functions'

export const Caja = () => {
  
  const [valueInput, setValueInput] = useState('');
  const [resultsSearch, setResultsSearch] = useState([]);

  const handlerInputChange = (e) => {
    setValueInput(e.target.value)
  };

  const getPrueba1 = async() => {
    const response = await serachProduct(valueInput);
    setResultsSearch(response.data);
  };

  console.log(resultsSearch)

  return (
    <div className='caja-container'>
      <div className='caja-container-header'>
        <span>Código de Producto: </span>
        <div className='caja-input-container'>
          <Input onChange={handlerInputChange} name='codProduct' id='codProduct' type='search' />
        </div>
        <div className='caja-button-container'>
          <Boton
            onClick={() => getPrueba1()}
            name='Buscar'
            className='button-base'
          />
        </div>
      </div>
      <div className='caja-container-search-results'>
      {
        resultsSearch.map(element => (
          <div>
            <span key={element.id}>{element.id}</span>
            <span key={element.name}>{element.name}</span>
          </div>
        ))
      }
      </div>
      <div className='caja-container-body'>
        <span></span>
      </div>
    </div>
  )
}
