import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import { validateUser } from './../../redux/action';
import pic from '../../assets/git.ico';

const Login = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const handleClick = (e) => {
        dispatch(validateUser(input.email, input.password))
        e.preventDefault()
        setInput({
            email: '',
            password: ''
        })
    }
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center md:w-1/3 md:border md:border-gray-500 md:rounded-lg '>
                <section className='h-52 w-full flex flex-col justify-evenly items-center'>
                    <img src={pic} alt="logingPic" className='h-28 w-28 rounded-full' />
                    <h2 className='text-2xl font-bold'>Iniciar sesión</h2>
                </section>

                <form className='h-52 w-full flex flex-col justify-center '>
                    <div className='h-3/6 w-full flex flex-col justify-center my-4 '>
                        <span className='text-sm font-bold text-blue-800 w-80 h-8 mx-auto'>Correo electrónico</span>
                        <input
                            className='w-80 h-8 mx-auto border text-sm pl-4 outline-blue-800 border-gray-300 rounded-sm placeholder:pl-4 placeholder:text-sm '
                            type='text'
                            name='email'
                            value={input.email}
                            onChange={handleChange}
                            placeholder='Correo electrónico...' />

                    </div>
                    <div className='h-1/2 w-full flex flex-col justify-center my-4'>
                        <span className='text-sm font-bold text-blue-800 w-80 h-8 mx-auto' >Contraseña</span>
                        <input
                            className='w-80 h-8 mx-auto border text-sm pl-4 outline-blue-800 border-gray-300 rounded-sm placeholder:pl-4 placeholder:text-sm '
                            type='password'
                            name='password'
                            value={input.password}
                            onChange={handleChange}
                            placeholder='Contraseña...' />
                    </div>
                    <button className='w-28 h-10 flex justify-center items-center md:mb-8 mx-auto text-sm border border-blue-300 rounded-sm ' onClick={handleClick} >Siguiente</button>
                </form>
                    <p className='w-80 h-8 mx-auto text-center bottom-2.5 fixed'>¿Olvidaste la contraseña?</p>
            </div>
        </div>
    )
}

export default Login