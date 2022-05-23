import React, { useEffect } from 'react'
import { getLocation, getWeather } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);
  
  const { location } = useSelector(state => state);

  useEffect(() => {
    dispatch(getWeather(location.city))
  }, [dispatch, location.city]);

  return (
    <>
      <h1>DATOS SOBRE LA UBICACIÓN</h1>
      <h3>Pais:</h3>
      <p>{location.country_name}</p>
      <h3>Ciudad:</h3>
      <p>{location.city}</p>
      <h3>Indicativo Telefónico:</h3>
      <p>{location.country_calling_code}</p>
    </>
  )
}

export default About


