import { LOCATION } from './types';
import axios from 'axios';

export const getLocation = async () => {
    return (dispatch) => {
        try {
            return axios.get('https://ipapi.co/json/')
                .then(res => { dispatch({ type: LOCATION, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.error('PROBLEM IN ACTION GETLOCATION', error);
        }
    }
}
