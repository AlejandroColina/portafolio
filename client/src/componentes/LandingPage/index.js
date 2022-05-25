import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, getWeather } from './../../redux/action';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Landing() {
    //#region 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocation());
    }, [dispatch]);

    const { location } = useSelector(state => state);
    console.log(location)
    useEffect(() => {
        dispatch(getWeather(location.city))
    }, [dispatch, location.city]);
    //#endregion

    return (
        <section className={styles.gif} >
            <div className={styles.opacity}>
                <Link className={styles.bottom} to='/about'>
                    Ey, qué tal? {<br />} Entrá y conocé un poco sobre mí
                </Link>
            </div>

        </section>
    )
}

export default Landing