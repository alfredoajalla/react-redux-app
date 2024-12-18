import { createSlice } from "@reduxjs/toolkit";
import { LocaStorageTypes, Person } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState: Person[] = []


export const favoritesSlice = createSlice({
    name: LocaStorageTypes.FAVORITES,
    initialState: getLocalStorage(LocaStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(LocaStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(LocaStorageTypes.FAVORITES, state);
            return action.payload;
        }
    }
});

export const { addFavorite } = favoritesSlice.actions;