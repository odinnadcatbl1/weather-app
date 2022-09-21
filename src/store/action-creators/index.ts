import * as WeatherActionCreator from "./weather";
import * as TownsActionCreator from "./towns";

export default {
    ...WeatherActionCreator,
    ...TownsActionCreator,
};
