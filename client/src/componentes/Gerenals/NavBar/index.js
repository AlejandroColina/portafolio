import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav({ nombre1, nombre2, link1, link2 }) {
  const { weather, location } = useSelector(state => state);
  return (
    <nav>
      <section>
        <ul>
          <Link to={link1} > <li>{nombre1}</li></Link>
          <Link to={link2} > <li>{nombre2}</li></Link>
        </ul>
      </section>
      <section>
        <div>
          <p>Min {parseInt(weather.temp_min)}°c - Máx {parseInt(weather.temp_max)}°c</p>
        </div>
        <div>
          <p>{location.city}, {location.country_code_iso3}</p>
        </div>
      </section>
    </nav>
  )
}

export default Nav