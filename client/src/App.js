import React, { useEffect } from 'react';
import LandingP from './componentes/Start/index';
import Nav from './componentes/Gerenals/NavBar/index';
import About from './componentes/AboutMe/index';
import Projects from './componentes/Project/index';
import Certificacions from './componentes/Certifications/index';
import WhatsApp from './componentes/Gerenals/WhatsApp/index';
import Footer from './componentes/Gerenals/Footer/index';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, sumVisitors, getWeather, postVisitors, getVisitors } from './redux/action';
import { Route } from 'react-router-dom';
import Admin from './componentes/Admin/Admin';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation());
    dispatch(sumVisitors());
  }, [dispatch]);

  const { location } = useSelector(state => state);
  useEffect(() => {
    dispatch(getWeather(location.city))
    dispatch(postVisitors({
      description: window.navigator.userAgent,
      city_visitor: location.city,
      ip_visitor: location.ip
    }))
    setTimeout(() => { dispatch(getVisitors()); }, 2000)
  }, [dispatch, location.city, location.ip]);
  return (
    <div className="h-full w-full">
      <Route exact path='/' >
        <div className=''>
          <Nav />
          <LandingP />
          <WhatsApp />
        </div >
        <div className='h-96'><About /></div>
        <div><Projects /></div>
        <div className='min-h-96'><Certificacions /></div>
        <div className=''><Footer /></div>
      </Route>
      <Route exact path='/admin' component={Admin} />
    </div>
  );
}

export default App;
