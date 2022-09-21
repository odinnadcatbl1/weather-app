import {
    Town,
    TownsState,
    TownsActionTypes,
    TownsAction,
} from "../../types/types";

const initialState: TownsState = {
    towns: [],
};

export const townsReducer = (state = initialState, action: TownsAction) => {
    switch (action.type) {
        case TownsActionTypes.ADD_TOWN:
            return {
                ...state,
                towns: [...state.towns, action.payload],
            };

        case TownsActionTypes.DELETE_TOWN:
            return {
                ...state,
                towns: [
                    state.towns.filter((town) => {
                        return town.id !== action.payload;
                    }),
                ],
            };

        default:
            return state;
    }
};
