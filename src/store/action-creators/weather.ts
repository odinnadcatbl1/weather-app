import axios from "axios";
import { Dispatch } from "react";
import { WeatherAction, WeatherActionTypes, List } from "../../types/types";
import { Response } from "../../types/types";

export const fetchWeather = (city: string) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({ type: WeatherActionTypes.FETCH_WEATHER_REQUEST });
            const response = await axios.get<Response>(
                `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=c7b03e89eab41acf7d059b9ea7250e65`
            );
            dispatch({
                type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
                payload: response.data.list,
            });
        } catch (e) {
            dispatch({
                type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
                payload: "Не удалось загрузить данные",
            });
        }
    };
};
