import { LOCATION, WEATHER, INFO_CARDS, CLOSE_SESION, CERTIFICADOS, SUM_VISITORS, NUM_VISITORS, POST_VISITORS, GET_VISITORS, VALIDATE_USER } from "./types";

const initialState = {
    location: {},
    weather: {},
    infoCards: [],
    certificates: [],
    dataVisitors: [],
    numVisitors: 0,
    validationUser: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOCATION:
            return {
                ...state,
                location: payload
            }
        case WEATHER:
            return {
                ...state,
                weather: payload
            }

        case INFO_CARDS:
            return {
                ...state,
                infoCards: payload
            }

        case CERTIFICADOS:
            return {
                ...state,
                certificates: payload
            }

        case NUM_VISITORS:
            return {
                ...state,
                numVisitors: payload
            }

        case GET_VISITORS:
            return {
                ...state,
                dataVisitors: payload
            }

        case POST_VISITORS:
            return {
                ...state
            }

        case SUM_VISITORS:
            return {
                ...state
            }
        case VALIDATE_USER:
            return {
                ...state,
                validationUser: payload
            }
        case CLOSE_SESION:
            return {
                ...state,
                validationUser: payload
            }

        default: return state
    }

}