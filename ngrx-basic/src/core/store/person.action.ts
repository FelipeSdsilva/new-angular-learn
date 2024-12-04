import { createAction, props } from "@ngrx/store";
import { Person } from "../models/person.model";

export enum PersonActionType {
    PERSON_ALL = '[PERSON_ALL] Get all people',
    PERSON_NEW = '[PERSON_NEW] Create new person',
    PERSON_UPDATE = '[PERSON_UPDATE] Update a person',
    PERSON_DELETE = '[PERSON_DELETE] Delete a person',
}

export const PersonAll = createAction(PersonActionType.PERSON_ALL);
export const PersonNew = createAction(PersonActionType.PERSON_NEW, props<{ person: Person }>());
export const PersonUpdate = createAction(PersonActionType.PERSON_UPDATE, props<{ person: Person }>());
export const PersonDelete = createAction(PersonActionType.PERSON_DELETE, props<{ id: string }>());