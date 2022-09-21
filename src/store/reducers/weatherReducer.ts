import {
    List,
    DataState,
    WeatherAction,
    WeatherActionTypes,
} from "../../types/types";

const initialState: DataState = {
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
            };

        case WeatherActionTypes.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
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
