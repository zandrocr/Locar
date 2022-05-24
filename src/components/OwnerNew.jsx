//import css
import '../css/service.css'
import '../css/newproject.css'
//import hook
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mask, unMask } from 'remask';
//import back
import api from "./Api";
//import components
import Button from './Button';


//menssgem de aviso de erro
const validationService = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório').max(40, 'Maximo de 20 caracteres.'),
    nascimento: yup.string().required('A data é obrigatória'),
    cpf: yup.string().required('O cpf é obrigatório').min(14, 'Digite corretamente'),
    rg: yup.string().required('O rg é obrigatório').min(12, 'Digite corretamente'),
    cnh: yup.string().required('A cnh é obrigatória').min(11, 'Digite corretamente'),
    telefone: yup.string().required('O telefone é obrigatório').min(15, 'Digite corretamente'),
    telefonetwo: yup.string().min(15, 'Digite corretamente')
})

const NewOwner = () => {

    let navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationService)
    })
    const addOwner = data => api.post('/owner/', data)
    .then(() => {
        console.log('envio efetuado')
        navigate('../ownerpage')
    })
    .catch(() => {
        console.log(errors)
    }, [])

//mascaras dos inputs (erro ao fazer a mascara condicionada)
    const [ value, setvalue ] = useState([])
    const onChange = ev => {
        setvalue(mask(unMask(ev.target.value), ['999.999.999-99']))
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

    return (
        <div className='project d-flex justify-content-around'>
            <div className='d-flex col-12 flex-column'>
                <div className='d-flex flex-column align-items-center justify-content-around'>
                    <div className='col-10'>
                    <h1 className="title">Novo Dono</h1>
                    <div className='line col-12'></div>
                    <form onSubmit={handleSubmit(addOwner)} className='form d-flex flex-column col-12 justify-content-around'>
                    <div className='col-12 d-sm-flex justify-content-around'>
                        <div className='col-sm-5'>
                            <div className='d-flex flex-column bd-highlight'>
                                <label className="title">Nome</label>
                                <input
                                className='input'
                                autocomplete="off"
                                name={'nome'}
                                {...register('nome')}
                                placeholder={'Digite o nome'}/>
                                <p>{errors.nome?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">Nascimento</label>
                                <input
                                type={'date'}
                                className='input'
                                autocomplete="off"
                                name={'nascimento'}
                                {...register('nascimento')}
                                placeholder={'Digite o nascimento'}
                                />
                                <p>{errors.nascimento?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">CPF</label>
                                <input
                                className='input'
                                autocomplete="off"
                                name={'cpf'}
                                {...register('cpf')}
                                placeholder={'Digite o cpf'}
                                onChange={onChange}
                                value={value}
                                />
                                <p>{errors.cpf?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">RG</label>
                                <input
                                className='input'
                                autocomplete="off"
                                name={'rg'}
                                {...register('rg')}
                                placeholder={'Digite o rg'}
                                onChange={onRg}
                                value={rg}
                                />
                                <p>{errors.rg?.message}</p>
                            </div>
                        </div>

                        <div className='col-sm-5'>
                            <div className='d-flex flex-column'>
                                <label className="title">CNH</label>
                                <input
                                className='input'
                                name='cnh'
                                type={'text'}
                                autocomplete="off"
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
                                autocomplete="off"
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
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite um número para recado'}
                                {...register('telefonetwo')}
                                onChange={onTelw}
                                value={telw}
                                />
                                <p>{errors.telefonetwo?.message}</p>
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

export default NewOwner;