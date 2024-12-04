import { Injectable } from '@angular/core';
import { addDoc, collection, CollectionReference, DocumentData, Firestore, setDoc } from 'firebase/firestore';
import { Person } from '../../models/person.model';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private peopleCollection: CollectionReference<DocumentData>;

  constructor(private afs: Firestore) {
    this.peopleCollection = collection(this.afs, 'people');
  }

  async getPeople(): Promise<Observable<Person[]>> {
    return collectionData(this.peopleCollection, { idField: 'id' }) as Observable<Person[]>;
  }

  async addPerson(p: Person) {
    const docRef = await addDoc(collection(this.afs, 'people'), {
      ...p
    });
    // p.id = docRef.id;
    setDoc(docRef, p);
  }

}
