import { LOCATION, WEATHER, INFO_CARDS, CERTIFICADOS } from './types';
import axios from 'axios';

export const getLocation = () => {
    return async (dispatch) => {
        try {
            return axios('https://ipapi.co/json/')
                .then(res => { dispatch({ type: LOCATION, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEM IN ACTION GETLOCATION', error);
        }
    }
};

export const getWeather = (city) => {
    return async (dispatch) => {
        try {
            if (city !== undefined) {
                return axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}
                &units=metric&appid=82fa79d50a8f56acb6bf7b6be6223382`)
                    .then(res => { dispatch({ type: WEATHER, payload: res.data.main }) })
                    .catch(err => console.log(err))
            }
        } catch (error) {
            console.error('PROBLEM IN ACTION GETWEATHER', error);
        }
    }
}

export const getInfoCards = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/cards`)
                .then(res => { dispatch({ type: INFO_CARDS, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEN IN ACTION INFO_CARDS', error);
        }
    }
}

export const getCertificates = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/certificates`)
                .then(res => { dispatch({ type: CERTIFICADOS, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEN IN ACTION CERTIFICADOS', error);
        }
    }
}
//