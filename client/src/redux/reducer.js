import { LOCATION, WEATHER } from "./types";

const initialState = {
    location: {},
    weather: {}
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

        default: return state
    }

}