import { Injectable } from '@angular/core';
import { addDoc, collection, CollectionReference, DocumentData, Firestore, setDoc } from '@angular/fire/firestore';
import { Person } from '../../models/person.model';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private peopleCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.peopleCollection = collection(this.firestore, 'people');
  }

  getPeople(): Observable<Person[]> {
    return collectionData(this.peopleCollection, { idField: 'id' }) as Observable<Person[]>;
  }

  async addPerson(person: Person) {
    const docRef = await addDoc(this.peopleCollection, { ...person });
    await setDoc(docRef, person);
  }
}