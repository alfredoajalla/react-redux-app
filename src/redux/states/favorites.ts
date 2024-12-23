import { createSlice, current } from "@reduxjs/toolkit";
import { LocaStorageTypes, Person } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState: Person[] = [];


export const favoritesSlice = createSlice({
    name: LocaStorageTypes.FAVORITES,
    initialState: getLocalStorage(LocaStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(LocaStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(LocaStorageTypes.FAVORITES, action.payload);
            return action.payload;
        },
        removeFavorite: (state, action) => {
            const filteredState = current(state).filter((p: Person) => p.id !== action.payload.id )
            setLocalStorage(LocaStorageTypes.FAVORITES, filteredState);
            return filteredState;
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;