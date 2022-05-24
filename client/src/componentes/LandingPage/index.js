import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, getWeather } from './../../redux/action';
import { Link } from 'react-router-dom';

function Landing() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocation());
    }, [dispatch]);

    const { location } = useSelector(state => state);
    console.log(location)
    useEffect(() => {
        dispatch(getWeather(location.city))
    }, [dispatch, location.city]);
    return (
        <>
            <h1>Landing</h1>
            <Link to='/about'>ABOUT</Link>
        </>
    )
}

export default Landing