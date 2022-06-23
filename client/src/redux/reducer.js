import { LOCATION, WEATHER, INFO_CARDS, CERTIFICADOS } from "./types";

const initialState = {
    location: {},
    weather: {},
    infoCards: [],
    certificates: []
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

        default: return state
    }

}