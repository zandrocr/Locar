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
  placa: yup.string().required('A placa é obrigatório'),
  infrator: yup.string().required('O nome é obrigatório').max(30, 'Maximo de 30 caracteres.'),
  ait: yup.string().required('A AIT é obrigatório'),
  codInfra: yup.string().required('O codigo da infração é obrigatório'),
  dataInfra: yup.string().required('O data da infração é obrigatório'),
  dataIndic: yup.string().required('O data da infração é obrigatório'),
  obs: yup.string().max(100, 'Maximo de 100 caracteres.'),
  situation: yup.string().max(100, 'Maximo de 100 caracteres.'),
  value: yup.string().required('O valor é obrigatório'),
  local: yup.string().max(100, 'Maximo de 100 caracteres.'),
  indic: yup.string().required('O data de indicação é obrigatório'),
  pay: yup.string().required('O status do pagamento é obrigatório'),
})

const FinesEdit = () => {
//variables
  const [ fine ,setFine] = useState([])
  const {id} = useParams()
  let navigate = useNavigate()
//comands yup
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
      resolver: yupResolver(validationService)
  })
//list car
  useEffect(() => {
      setTimeout(() => {
        api.get('/car/')
          .then((response) => {
            setFine(response.data)
        })
        .catch(() => {
              console.log(errors)
        })
      })
  }, [])
//comand edit put
  const editFine = (data) => api.put(`/fine/${id}`, data)
  .then(() => {
      console.log('envio efetuado')
      navigate(`../finesmore/${id}`)
  })
  .catch(() => {
      console.log(errors)
  })
//get the fine
  useEffect(() => {
    api.get(`/fine/${id}`)
    .then((response) => {
        reset(response.data)
    })
  }, [])

//mascaras dos inputs (erro ao fazer a mascara condicionada)
  const [ ait, setAit ] = useState()
  const onAit = ev => {
    setAit(mask(unMask(ev.target.value), ['SSSSSSSSSSSSSSSSSSSS']))
  }
  const [ codInfra, setCodInfra ] = useState()
  const onCodInfra = ev => {
    setCodInfra(mask(unMask(ev.target.value), ['9999999999']))
  }
  const [ value, setValue ] = useState()
  const onValue = ev => {
    setValue(mask(unMask(ev.target.value), ['9,99', '99,99', '999,99', '9.999,99', '99.999,99']))
  }
  const [ date, setDate ] = useState()
  const onDate = ev => {
    setDate(mask(unMask(ev.target.value), ['99/99/9999']))
  }
  const [ dateInd, setDateInd ] = useState()
  const onDateInd = ev => {
    setDateInd(mask(unMask(ev.target.value), ['99/99/9999']))
  }
  const [ dateCad, setDateCad ] = useState()
  const onDateCad = ev => {
    setDateCad(mask(unMask(ev.target.value), ['99/99/9999']))
  }

  return (
    <div className='project d-flex col-12 justify-content-center'>
      <div className='col-10'>
        <h1 className='title'>Editar Multa</h1>
        <div className='d-flex flex-column justify-content-around'>
          <div className='line col-12'></div>
          <form onSubmit={handleSubmit(editFine)} className='form d-flex flex-column col-12 justify-content-around'>
            <div className='d-sm-flex justify-content-around'>
              <div className='col-12 d-sm-flex justify-content-around'>
                <div class="col-sm-5">
                  <div className='d-flex flex-column bd-highlight' >
                    <label className='title'>Placa</label>
                    <select className='col-12 input' {...register('placa')}>
                      <option disabled selected value="">Selecione o tipo</option>
                      {fine.map((fine) => (
                        <option key={fine.id}>{fine.placa}</option>
                      ))}
                    </select>
                    <p>{errors.placa?.message}</p>
                  </div>
                  <div className='d-flex flex-column bd-highlight'>
                    <label className='title'>Infrator</label>
                    <input
                    className='input'
                    autocomplete="off"
                    name={'infrator'}
                    {...register('infrator')}
                    placeholder={'Digite a infração'}/>
                    <p>{errors.infrator?.message}</p>
                  </div>
                  <div className='d-flex flex-column bd-highlight'>
                    <label className='title'>AIT</label>
                    <input
                    className='input'
                    autocomplete="off"
                    name={'ait'}
                    {...register('ait')}
                    placeholder={'Digite o AIT'}
                    onChange={onAit}
                    value={ait} />
                    <p>{errors.ait?.message}</p>
                  </div>
                  <div className='d-flex flex-column bd-highlight'>
                    <label className='title'>Cod. Infração</label>
                    <input
                    className='input'
                    autocomplete="off"
                    name={'codInfra'}
                    {...register('codInfra')}
                    placeholder={'Digite o código da infração'}
                    onChange={onCodInfra}
                    value={codInfra}/>
                    <p>{errors.codInfra?.message}</p>
                  </div>
                  <div className='d-flex flex-column bd-highlight'>
                    <label className='title'>Data da Infração</label>
                    <input
                    className='input'
                    autocomplete="off"
                    name={'dataInfra'}
                    {...register('dataInfra')}
                    placeholder={'Digite a data da infração'}
                    onChange={onDate}
                    value={date}
                    />
                    <p>{errors.dataInfra?.message}</p>
                  </div>
                  <div className='d-flex flex-column bd-highlight'>
                    <label className='title'>Data Para Indicação</label>
                    <input
                    className='input'
                    autocomplete="off"
                    name={'dataIndic'}
                    {...register('dataIndic')}
                    placeholder={'Digite a data de indicação'}
                    onChange={onDateInd}
                    value={dateInd}  />
                    <p>{errors.dataIndic?.message}</p>
                  </div>
              </div>

              <div class="col-sm-5">
                <div className='d-flex flex-column bd-highlight'>
                  <label className='title'>Observação</label>
                  <input
                  className='input'
                  autocomplete="off"
                  name={'obs'}
                  {...register('obs')}
                  placeholder={'Obs'}
                  />
                  <p>{errors.obs?.message}</p>
                </div>
                <div className='d-flex flex-column bd-highlight'>
                  <label className='title'>Situação</label>
                  <input
                  className='input'
                  autocomplete="off"
                  name={'situation'}
                  {...register('situation')}
                  placeholder={'Digite o modelo do carro'}
                  />
                  <p>{errors.situation?.message}</p>
                </div>
                <div className='d-flex flex-column bd-highlight'>
                  <label className='title'>Valor</label>
                  <input
                  className='input'
                  autocomplete="off"
                  name={'value'}
                  {...register('value')}
                  placeholder={'Digite o valor da multa'}
                  onChange={onValue}
                  value={value}
                  />
                  <p>{errors.value?.message}</p>
                </div>
                <div className='d-flex flex-column bd-highlight'>
                  <label className='title'>Local</label>
                  <input
                  className='input'
                  autocomplete="off"
                  name={'local'}
                  {...register('local')}
                  placeholder={'Digite o modelo do carro'}/>
                  <p>{errors.local?.message}</p>
                </div>
                <div className='d-flex flex-column bd-highlight'>
                  <label className='title'>Indicada</label>
                  <input
                  className='input'
                  autocomplete="off"
                  name={'indic'}
                  {...register('indic')}
                  onChange={onDateCad}
                  value={dateCad} />
                  <p>{errors.indic?.message}</p>
                </div>
                <div className='d-flex flex-column' >
                  <label className='title'>Pago</label>
                  <select className='col-12 input' {...register('pay')}>
                    <option disabled selected value="">Selecione status</option>
                    <option value="Pago">Pago</option>
                    <option value="Não Pago">Não Pago</option>
                  </select>
                  <p>{errors.pay?.message}</p>
                </div>
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

export default FinesEdit;