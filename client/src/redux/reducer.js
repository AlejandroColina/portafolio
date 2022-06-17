import { LOCATION, WEATHER, INFO_CARDS } from "./types";

const initialState = {
    location: {},
    weather: {},
    infoCards: []
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

        default: return state
    }

}