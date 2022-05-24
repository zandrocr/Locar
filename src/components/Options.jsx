//import css
import '../css/project.css'
import '../css/options.css'
//import hook
import { Link } from "react-router-dom";
import { useState } from 'react'
//import image
import optionCar from '../svg/optionCar.png'
import newOwner from '../svg/owner.png'
import newCar from '../svg/car.png'
import newFine from '../svg/fine.png'

const Options = () => {

//alterar o status do checkbox de checked para unchecked precionando .navbar
  const [check, setCheck] = useState(false)
  const handleChange = () => {
      setCheck(!check)
  }

  function unchecked(){
      if (check == true){
          check = false
      }
  }

  return (
    <div className={'fines_new'}>
      <div>
        <input
          type="checkbox"
          name="optionCar"
          id="optionCar"
          onChange={handleChange} />
        <nav className='d-flex flex-column justify-content-center align-items-center'>
          <Link
            to='/finesnew'
            className={'d-flex flex-column align-items-center'}
            onClick={unchecked}>
              <img
                src={newFine}
                alt="newFine"
                className='up'/>
          </Link>
          <Link
            to='/newcar'
            className={'d-flex flex-column align-items-center'}
            onClick={unchecked}>
              <img
                src={newCar}
                alt="newCar"
                className='up' />
          </Link>
          <Link
            to='/newowner'
            className={'d-flex flex-column align-items-center'}
            onClick={unchecked}>
              <img
                src={newOwner}
                alt="newOwner"
                className='up'/>
          </Link>
          <label htmlFor="optionCar"
            className={'label d-flex flex-column align-items-center'}>
            <img
              src={optionCar}
              alt="optionCar"
              name='optionCar'
              id='optionCar' />
            <label className='title' htmlFor="optionCar">
              Novo Registro
            </label>
          </label>
        </nav>
      </div>
    </div>
   );
}

export default Options;