import { createFeatureSelector } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export const peopleState = createFeatureSelector<fromPersonReducer.PeopleState>('people');
export const {
    selectAll: selectAllPeople,
    selectEntities: selectPeopleEntities,
    selectIds: selectPeopleIds,
    selectTotal: selectPeopleTotal
} = fromPersonReducer.peopleAdapter.getSelectors(peopleState);