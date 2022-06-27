
import { LOCATION, WEATHER, INFO_CARDS, CLOSE_SESION, CERTIFICADOS, NUM_VISITORS, SUM_VISITORS, POST_VISITORS, GET_VISITORS, VALIDATE_USER } from './types';
import axios from 'axios';
import swal from 'sweetalert2';

// const API_PORTAFOLIO = 'https://portfolio-alejandro-colina.herokuapp.com/'
const API_PORTAFOLIO = 'http://localhost:3001'
const API_LOCATION = 'https://ipapi.co/json/';

export const getLocation = () => {
    return async (dispatch) => {
        try {
            return axios(API_LOCATION)
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
            return axios.get(`${API_PORTAFOLIO}/cards`)
                .then(res => { dispatch({ type: INFO_CARDS, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEM IN ACTION INFO_CARDS', error);
        }
    }
}

export const getCertificates = () => {
    return async (dispatch) => {
        try {
            return axios.get(`${API_PORTAFOLIO}/certificates`)
                .then(res => { dispatch({ type: CERTIFICADOS, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEM IN ACTION CERTIFICADOS', error);
        }
    }
}

export const getNumsVisitors = () => {
    return async (dispatch) => {
        try {
            return axios.get(`${API_PORTAFOLIO}/visitors/num-v`)
                .then(res => { dispatch({ type: NUM_VISITORS, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEM IN ACTION NUM_VISITORS', error);
        }
    }
}

export const sumVisitors = () => {
    return async (dispatch) => {
        try {
            return axios.get(`${API_PORTAFOLIO}/visitors/sum-v`)
                .then(() => { dispatch({ type: SUM_VISITORS }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEM IN ACTION SUM_VISITORS', error);
        }
    }
}

export const getVisitors = () => {
    return async (dispatch) => {
        try {
            return axios.get(`${API_PORTAFOLIO}/visitors`)
                .then(res => { dispatch({ type: GET_VISITORS, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEM IN ACTION GET_VISITORS', error);
        }
    }
}

export const postVisitors = (data) => {
    return async (dispatch) => {
        try {
            return axios.post(`${API_PORTAFOLIO}/visitors/data-v`, data)
                .then(() => {
                    dispatch({ type: POST_VISITORS })
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEM IN ACTION POST_VISITORS', error);
        }
    }
}

export const validateUser = (email, password) => {
    return async (dispatch) => {
        try {
            return axios.get(`${API_PORTAFOLIO}/admin?email=${email}&password=${password}`)
                .then(res => {
                    if (res.status === 200) {
                        dispatch({ type: VALIDATE_USER, payload: res.data })
                    }
                    swal.fire(res.response.data.msg, '', 'error');
                })
                .catch(err => {
                    swal.fire(err.response.data.msg, 'Correo electrónico inexistente', 'error');
                    console.log(err)
                })
        } catch (error) {
            console.error('PROBLEM IN ACTION VALIDATE_USER', error);
        }
    }
}

export const closeSesion = () => {
    return {
        type: CLOSE_SESION,
        payload: false
    }
}