//import css
import '../css/service.css'
import '../css/newproject.css'
//import hook
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
//import back
import api from "./Api";
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { mask, unMask } from 'remask';
import { useState } from 'react';

//menssgem de aviso de erro
const validationService = yup.object().shape({
    nome: yup.string().uppercase().required('O nome é obrigatório').max(30, 'Maximo de 20 caracteres.'),
    nascimento: yup.string().required('A data é obrigatória'),
    cpf: yup.string().required('O cpf é obrigatório'),
    rg: yup.string().required('O rg é obrigatório'),
    cnh: yup.string().required('A cnh é obrigatória').max(15, 'Maximo de 15 caracteres.'),
    telefone: yup.string().required('O telefone é obrigatório').max(12),
    telefonetwo: yup.string().max(12),
})
{/**
const InputMask = ({ mask, onChange, ...props }) => {
    const handleChange = ev => {
        const originalValue = unMask(ev.target.value)
        const maskedValue = masker(originalValue, mask)
        onChange(maskedValue)
    }
    return <input {...props}  onChange={handleChange} />
}
 */}
const NewOwner = () => {

    let navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationService)
    })
    const addDono = data => api.post('/owner/', data)
    .then(() => {
        console.log('envio efetuado')
        navigate('../ownerpage')
    })
    .catch(() => {
        console.log(errors)
    }, [])

    const [ value, setvalue ] = useState([])
    const onChange = ev => {
        setvalue(mask(unMask(ev.target.value), ['999.999.999-99']))
    }

    return (
        <div className='project d-flex justify-content-around'>
            <div className='d-flex col-12 flex-column'>
                <div className='d-flex flex-column align-items-center justify-content-around'>
                    <div className='col-10'>
                    <h1 className="title">Nova Dono</h1>
                    <div className='line col-12'></div>
                    <form onSubmit={handleSubmit(addDono)} className='form d-flex flex-column col-12 justify-content-around'>
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
                                placeholder={'Digite o rg'}/>
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
                                {...register("cnh")} />
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
                                {...register('telefone')}/>
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