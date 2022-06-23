import React, { useEffect } from 'react';
import LandingP from './componentes/Start/index';
import Nav from './componentes/Gerenals/NavBar/index';
import About from './componentes/AboutMe/index';
import Projects from './componentes/Project/index';
import Certificacions from './componentes/Certifications/index';
import WhatsApp from './componentes/Gerenals/WhatsApp/index';
import Footer from './componentes/Gerenals/Footer/index';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, getWeather } from './redux/action';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  const { location } = useSelector(state => state);

  useEffect(() => {
    dispatch(getWeather(location.city))
  }, [dispatch, location.city]);
  return (
    <div className="h-full w-full">
      <div className=''>
        <Nav />
        <LandingP />
        <WhatsApp />
      </div >
      <div className='h-96'><About /></div>
      <div><Projects /></div>
      <div className='min-h-96'><Certificacions /></div>
      <div className=''><Footer /></div>
    </div>
  );
}

export default App;
