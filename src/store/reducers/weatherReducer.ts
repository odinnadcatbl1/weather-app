import {
    List,
    WeatherState,
    WeatherAction,
    WeatherActionTypes,
} from "../../types/types";

const initialState: WeatherState = {
    data: [],
    loading: true,
    error: "",
};

export const weatherReducer = (state = initialState, action: WeatherAction) => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: "",
            };

        case WeatherActionTypes.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: "",
            };

        case WeatherActionTypes.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
