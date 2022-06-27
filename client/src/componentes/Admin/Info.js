import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNumsVisitors, closeSesion } from './../../redux/action';

const Info = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNumsVisitors())
    }, [dispatch]);
    const { numVisitors, dataVisitors } = useSelector(state => state);
    const handleClick = () => {
        dispatch(closeSesion());
    }
    return (
        <div className='w-screen min-h-screen pt-2 md:flex md:flex-col md:justify-center md:items-center bg-gray-100'>
            <h1 className='h-30 mt-4 text-3xl text-center font-light'>Visitas al portafolio</h1>
            <span className='
            h-10 w-10 top-3 shadow-md bg-gray-200 right-2 z-10 border border-gray-300 rounded-full text-lg font-bold fixed flex justify-center items-center
            '>{numVisitors}</span>
            <ul className='w-full h-auto md:w-4/5 flex flex-wrap justify-start'>
                {
                    dataVisitors && dataVisitors.map((visitor, index) => {
                        return (
                            <div key={`${index}A`} className='w-11/12 h-auto mx-auto md:m-4 my-4 p-2 border border-gray-300 md:w-80 md:h-40 bg-gray-50 shadow-lg rounded-sm '>
                                <p className='text-sm my-1'><span className='text-sm font-bold inline-block' >Descripción: </span>{` ${visitor.description}`}</p>
                                <p className='text-sm my-1'><span className='text-sm font-bold'>Ciudad: </span> {` ${visitor.city_visitor}`}</p>
                                <p className='text-sm my-1'><span className='text-sm font-bold'>ip: </span> {` ${visitor.ip_visitor}`}</p>
                                <p className='text-sm my-1'><span className='text-sm font-bold'>fecha: </span> {` ${visitor.date}`}</p>
                            </div>
                        )
                    })
                }
            </ul>
            <button className='w-28 h-10 mb-4 flex justify-center items-center mx-auto text-sm border border-blue-300 rounded-sm'
                onClick={handleClick} >Cerrar sesión</button>
        </div>
    )
}

export default Info