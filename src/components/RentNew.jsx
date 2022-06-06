//import css
import '../css/service.css'
import '../css/newproject.css'
//import hook
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { mask, unMask } from 'remask';
//import back
import api from "./Api";
//import components
import Button from './Button';
import { useState, useEffect } from 'react';


//menssgem de aviso de erro
const validationService = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório').max(40, 'Maximo de 20 caracteres.'),
    nascimento: yup.string().required('A data é obrigatória'),
    cpf: yup.string().required('O cpf é obrigatório').min(14, 'Digite corretamente'),
    rg: yup.string().required('O rg é obrigatório').min(12, 'Digite corretamente'),
    cnh: yup.string().required('A cnh é obrigatória').min(11, 'Digite corretamente'),
    telefone: yup.string().required('O telefone é obrigatório').min(15, 'Digite corretamente'),
    telefonetwo: yup.string().min(15, 'Digite corretamente'),
    km: yup.string().required('O KM é obrigatório'),
    value: yup.string().required('O valor é obrigatório'),
    placa: yup.string().required('A placa é obrigatório')
})

const RentNew = () => {

    let navigate = useNavigate()
    const [ driver ,setDriver] = useState([])
//comands yup
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationService)
    })
//list car
    useEffect(() => {
        setTimeout(() => {
          api.get('/car/')
            .then((response) => {
                setDriver(response.data)
          })
          .catch(() => {
                console.log(errors)
          })
        })
    }, [])
//comand new post
    const addRent = data => api.post('/rent/', data)
    .then(() => {
        console.log('envio efetuado')
        navigate('../rent')
    })
    .catch(() => {
        console.log(errors)
    }, [])


//mascaras dos inputs (erro ao fazer a mascara condicionada)
    const [ cpf, setCpf ] = useState([])
    const onCpf = ev => {
        setCpf(mask(unMask(ev.target.value), ['999.999.999-99']))
    }
    const [ rg, setRg ] = useState([])
    const onRg = ev => {
        setRg(mask(unMask(ev.target.value), ['99.999.999-S']))
    }
    const [ cnh, setCnh ] = useState([])
    const onCnh = ev => {
        setCnh(mask(unMask(ev.target.value), ['99999999999']))
    }
    const [ tel, setTel ] = useState([])
    const onTel = ev => {
        setTel(mask(unMask(ev.target.value), ['(99) 99999-9999']))
    }
    const [ telw, setTelw ] = useState([])
    const onTelw = ev => {
        setTelw(mask(unMask(ev.target.value), ['(99) 99999-9999']))
    }
    const [ nascimento, setNascimento ] = useState()
    const onNascimento = ev => {
      setNascimento(mask(unMask(ev.target.value), ['99/99/9999']))
    }
    const [ valueAl, setValueAl ] = useState()
    const onValueAl = ev => {
      setValueAl(mask(unMask(ev.target.value), ['9,99', '99,99', '999,99', '9.999,99', '99.999,99']))
    }
    const [ km, setKm ] = useState()
    const onKm = ev => {
        setKm(mask(unMask(ev.target.value), ['999.999']))
    }

    return (
        <div className='project d-flex justify-content-around'>
            <div className='d-flex col-12 flex-column'>
                <div className='d-flex flex-column align-items-center justify-content-around'>
                    <div className='col-10'>
                    <h1 className="title">Novo Aluguel</h1>
                    <div className='line col-12'></div>
                    <form onSubmit={handleSubmit(addRent)} className='form d-flex flex-column col-12 justify-content-around'>
                    <div className='col-12 d-sm-flex justify-content-around'>
                        <div className='col-sm-5'>
                            <div className='d-flex flex-column'>
                                <label className="title">Nome</label>
                                <input
                                className='input'
                                autoComplete='off'
                                name={'nome'}
                                {...register('nome')}
                                placeholder={'Digite o nome'}/>
                                <p>{errors.nome?.message}</p>
                            </div>
                            <div className='d-flex flex-column bd-highlight'>
                                <label className='title'>Nascimento</label>
                                <input
                                className='input'
                                autoComplete='off'
                                name={'nascimento'}
                                {...register('nascimento')}
                                placeholder={'Digite a data de indicação'}
                                onChange={onNascimento}
                                value={nascimento}
                                />
                                <p>{errors.nascimento?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">CPF</label>
                                <input
                                className='input'
                                autoComplete="off"
                                name={'cpf'}
                                {...register('cpf')}
                                placeholder={'Digite o cpf'}
                                onChange={onCpf}
                                value={cpf}
                                />
                                <p>{errors.cpf?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">RG</label>
                                <input
                                className='input'
                                autoComplete="off"
                                name={'rg'}
                                {...register('rg')}
                                placeholder={'Digite o rg'}
                                onChange={onRg}
                                value={rg}
                                />
                                <p>{errors.rg?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">Km</label>
                                <input
                                name='telefonetwo'
                                type='tel'
                                autoComplete="off"
                                className='input'
                                placeholder={'Digite Km'}
                                {...register('km')}
                                onChange={onKm}
                                value={km}
                                />
                                <p>{errors.km?.message}</p>
                            </div>
                        </div>

                        <div className='col-sm-5'>
                            <div className='d-flex flex-column'>
                                <label className="title">CNH</label>
                                <input
                                className='input'
                                name='cnh'
                                type={'text'}
                                autoComplete="off"
                                placeholder={'Digite a cnh'}
                                {...register("cnh")}
                                onChange={onCnh}
                                value={cnh}
                                />
                                <p>{errors.cnh?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">Telefone</label>
                                <input
                                name='telefone'
                                type='tel'
                                autoComplete="off"
                                className='input'
                                placeholder={'Digite o telefone de contato'}
                                {...register('telefone')}
                                onChange={onTel}
                                value={tel}
                                />
                                <p>{errors.telefone?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">Telefone de recado</label>
                                <input
                                name='telefonetwo'
                                type='tel'
                                autoComplete="off"
                                className='input'
                                placeholder={'Digite um número para recado'}
                                {...register('telefonetwo')}
                                onChange={onTelw}
                                value={telw}
                                />
                                <p>{errors.telefonetwo?.message}</p>
                            </div>
                            <div className='d-flex flex-column bd-highlight' >
                                <label className='title'>Carro</label>
                                <select className='col-12 input' {...register('placa')}>
                                <option disabled selected value="">Selecione o tipo</option>
                                {driver.map((driver) => (
                                    <option key={driver.id}>{driver.placa}</option>
                                ))}
                                </select>
                                <p>{errors.placa?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">Valor</label>
                                <input
                                className='input'
                                autoComplete='off'
                                name={'value'}
                                {...register('value')}
                                placeholder={'Digite o valor do aluguel'}
                                onChange={onValueAl}
                                value={valueAl}
                                />
                                <p>{errors.value?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className='d-flex justify-content-around'>
                        <Button value={'Enviar'} />

                        <Link to={'/ownerpage'}>
                        <Button value={'Cancelar'} />
                        </Link>
                    </div>
                </form>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default RentNew;