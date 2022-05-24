//import css
import '../css/finesNew.css'
import '../css/newproject.css'
//import hook
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask, unMask } from 'remask';
//import back
import api from "./Api";
//import components
import Button from './Button';

//menssgem de aviso de erro
const validationService = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório').max(40, 'Maximo de 20 caracteres.')
})

const FinesNew = () => {

  let navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(validationService)
  })
  const addFine = data => api.post('/fine/', data)
  .then(() => {
      console.log('envio efetuado')
      navigate('../fines')
  })
  .catch(() => {
      console.log(errors)
  }, [])

  const [ car ,setCar] = useState([])
  useEffect(() => {
      setTimeout(() => {
        api.get('/car/')
          .then((response) => {
          setCar(response.data)
        })
        .catch(() => {
          console.log(errors)
        })
      })
  }, [])


//mascaras dos inputs (erro ao fazer a mascara condicionada)
  const [ value, setvalue ] = useState([])
  const onChange = ev => {
      setvalue(mask(unMask(ev.target.value), ['999.999.999-99']))
  }

  return (
    <div className='project d-flex col-12 justify-content-center'>
      <div className='col-10'>
        <h1 className='title'>Nova Multa</h1>
        <div className='d-flex flex-column justify-content-around'>
          <div className='line col-12'></div>

          <form onSubmit={handleSubmit(addFine)} className='form d-flex flex-column col-12 justify-content-around'>
            <div className='col-12 d-sm-flex justify-content-around'>
              <div className='col-sm-5'>
                <div className='d-flex flex-column' >
                  <label className='title'>Placa</label>
                  <select className='col-12 input' {...register('placa')}>
                      <option disabled selected value="">Selecione o tipo</option>
                      {car.map((car) => (
                        <option key={car.id}>{car.placa}</option>
                      ))}
                  </select>
                </div>
                <div className='d-flex flex-column bd-highlight'>
                    <label className="title">Nome</label>
                    <input
                    className='input'
                    autocomplete="off"
                    name={'nome'}
                    {...register('nome')}
                    placeholder={'Digite o nome'}/>
                    {car.map((car) => (
                      <p key={car.id}>{car.renavam}</p>
                    ))}
                    <p>{errors.nome?.message}</p>
                </div>
              </div>
          </div>
          <div className="line"></div>
          <div className='d-flex justify-content-around'>
              <Button value={'Enviar'} />

              <Link to={'/fines'}>
              <Button value={'Cancelar'} />
              </Link>
          </div>
        </form>
        </div>
      </div>
    </div>
   );
}

export default FinesNew;