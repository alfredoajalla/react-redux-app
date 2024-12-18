import { createSlice } from "@reduxjs/toolkit";
import { LocaStorageTypes, Person } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState: Person[] = []


export const peopleSlice = createSlice({
    name: LocaStorageTypes.PEOPLE,
    initialState: getLocalStorage(LocaStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(LocaStorageTypes.PEOPLE) as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(LocaStorageTypes.PEOPLE, state);
            return action.payload;
        }
    }
});

export const { addPeople } = peopleSlice.actions;