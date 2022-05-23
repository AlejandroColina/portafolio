import { LOCATION } from "./types";

const initialState = {
    location: {}
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOCATION:
            return {
                ...state,
                location: payload
            }

        default: return state
    }

}