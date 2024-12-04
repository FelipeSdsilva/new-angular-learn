import { Person } from "../models/person.model";
import * as fromPersonReducer from "./person.reducer";
import { ActionReducerMap, createSelector } from "@ngrx/store";

export interface AppState {
    people: fromPersonReducer.PeopleState;
}

export const appReducers: ActionReducerMap<AppState> = {
    people: fromPersonReducer.personReducer,
}

// export const selectPeople = (state: AppState) => state.people;

// export const selectPeopleCount = createSelector(
//     selectPeople,
//     (people) => people.length
// );

// export const selectPeopleCount2 = createSelector(
//     selectPeopleCount,
//     (n) => n + 1
// );