import { Town, TownsActionTypes } from "../../types/types";

export const addTown = (townName: string) => {
    return {
        type: TownsActionTypes.ADD_TOWN,
        payload: {
            name: townName,
            id: "id" + Math.floor(Math.random() * 100),
        },
    };
};

export const deleteTown = (id: string) => {
    return {
        type: TownsActionTypes.DELETE_TOWN,
        payload: id,
    };
};

export const setActiveTown = (town: Town) => {
    return {
        type: TownsActionTypes.SET_ACTIVE_TOWN,
        payload: town,
    };
};
