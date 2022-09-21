export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface List {
    main: Main;
    dt_txt: string;
}

export interface Response {
    city: {};
    cnt: number;
    cod: string;
    list: List[];
    message: number;
}

export interface DataState {
    data: List[];
    error: string;
    loading: boolean;
}

export enum WeatherActionTypes {
    FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
    FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE",
    FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST",
}

interface RequestFetchAction {
    type: WeatherActionTypes.FETCH_WEATHER_REQUEST;
}

interface SuccessFetchAction {
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
    payload: List[];
}

interface FailureFetchAction {
    type: WeatherActionTypes.FETCH_WEATHER_FAILURE;
    payload: string;
}

export type WeatherAction =
    | RequestFetchAction
    | SuccessFetchAction
    | FailureFetchAction;
