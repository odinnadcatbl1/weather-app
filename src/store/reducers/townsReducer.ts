import {
    Town,
    TownsState,
    TownsActionTypes,
    TownsAction,
} from "../../types/types";

const initialState: TownsState = {
    towns: [],
    activeTown: {
        name: "",
        id: "",
    },
};

export const townsReducer = (
    state = initialState,
    action: TownsAction
): TownsState => {
    switch (action.type) {
        case TownsActionTypes.ADD_TOWN:
            localStorage.setItem(
                "town",
                JSON.stringify([...state.towns, action.payload])
            );

            return {
                ...state,
                towns: [...state.towns, action.payload],
            };

        case TownsActionTypes.DELETE_TOWN:
            localStorage.setItem(
                "town",
                JSON.stringify([
                    ...state.towns.filter((town) => {
                        return town.id !== action.payload;
                    }),
                ])
            );

            return {
                ...state,
                towns: [
                    ...state.towns.filter((town) => {
                        return town.id !== action.payload;
                    }),
                ],
            };

        case TownsActionTypes.SET_ACTIVE_TOWN:
            return {
                ...state,
                activeTown: action.payload,
            };

        default:
            return state;
    }
};
