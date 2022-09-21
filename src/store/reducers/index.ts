import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
import { townsReducer } from "./townsReducer";

export const rootReducer = combineReducers({
    weather: weatherReducer,
    towns: townsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
