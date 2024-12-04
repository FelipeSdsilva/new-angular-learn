import { state } from "@angular/animations";
import { Person } from "../models/person.model";
import { createReducer, on } from "@ngrx/store";
import * as fronPersonActions from "./person.action";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface PeopleState extends EntityState<Person> {
}

export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
    selectId: (p: Person) => p.id ?? ''
});

export const intialState: PeopleState = peopleAdapter.getInitialState({
});
// export function reducer(state = intialState, action: fronPersonActions.PersonActions) {
//     switch (action.type) {
//         case fronPersonActions.PersonActionType.PERSON_ALL:
//             return state;
//         case fronPersonActions.PersonActionType.PERSON_NEW:
//             return state.concat([action.payload.person]);
//         case fronPersonActions.PersonActionType.PERSON_UPDATE:
//             let peoples = state.slice();
//             let i = peoples.findIndex(p => p.id === action.payload.person.id);
//             if (i >= 0) peoples[i] = action.payload.person;
//             return peoples;
//         case fronPersonActions.PersonActionType.PERSON_DELETE:
//             return state.filter(person => person.id != action.payload.id);
//         default:
//             return state;
//     }
// }
// export const personReducer = createReducer(
//     intialState,
//     on(fronPersonActions.PersonAll, (state) => state),
//     on(fronPersonActions.PersonNew, (state, { person }) => [...state, person]),
//     on(fronPersonActions.PersonUpdate, (state, { person }) =>
//         state.map((existingPerson) =>
//             existingPerson.id === person.id ? person : existingPerson
//         )
//     ),
//     on(fronPersonActions.PersonDelete, (state, { id }) =>
//         state.filter((existingPerson) => existingPerson.id !== id)
//     )
// )


export const personReducer = createReducer(
    intialState,
    on(fronPersonActions.PersonAll, (state) => state),
    on(fronPersonActions.PersonNew, (state, { person }) =>
        peopleAdapter.addOne(person, state)
    ),
    on(fronPersonActions.PersonUpdate, (state, { person }) =>
        peopleAdapter.updateOne(
            { id: person.id ?? '', changes: person },
            state
        )
    ),
    on(fronPersonActions.PersonDelete, (state, { id }) =>
        peopleAdapter.removeOne(id, state)
    )
);

