import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, getWeather } from './../../redux/action';
import styles from './styles.module.css';
import About from './../AboutMe/index';
import Projects from './../Project/index';
import Footer from './../Gerenals/Footer/index';
import Nav from './../Gerenals/NavBar/index';
import LandingP from './../Star/index';

function Landing() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocation());
    }, [dispatch]);

    const { location } = useSelector(state => state);
    useEffect(() => {
        dispatch(getWeather(location.city))
    }, [dispatch, location.city]);

    return (
        <div className={styles.container}>
            <Nav />
            <LandingP />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}

export default Landing