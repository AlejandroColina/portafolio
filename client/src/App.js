import React, { useEffect } from 'react';
import LandingP from './componentes/Star/index';
import About from './componentes/AboutMe/index';
import Projects from './componentes/Project/index';
import Certificacions from './componentes/Certifications/index';
import Nav from './componentes/Gerenals/NavBar/index';
import Footer from './componentes/Gerenals/Footer/index';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, getWeather } from './redux/action';
// import { Route, Switch } from 'react-router-dom';
// import Error from './componentes/Error/index';
// import Landing from './componentes/LandingPage/index';

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
    <div className="App">
      <Nav />
      <LandingP />
      <About />
      <Projects />
      <Certificacions />
      <Footer />
    </div>
  );
}

export default App;
