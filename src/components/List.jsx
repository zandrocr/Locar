//react use
import { useState, useEffect } from "react";
//api consum
import Api from "./Api";
//import css
import '../css/newproject.css'

const List = () => {

const [owner ,setOwner] = useState([])
useEffect(() => {
  setTimeout(() => {
    Api.get('/owner')
    .then((response) => {
      setOwner(response.data)
    })
    .catch(() => {
      console.log('fail')
    })
  })
}, [])

  return (
      <div>
        <label className='title'>Dono</label>
        <select required className='col-12 input'>
          <option disabled selected value="">Selecione o dono</option>
          {owner.map((owner) => (
            <option key={owner.id} >{owner.nome}</option>
          ))}
        </select>
      </div>
  );
}

export default List;