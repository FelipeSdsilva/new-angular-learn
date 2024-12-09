import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Auth, authState } from '@angular/fire/auth';
import { doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { catchError, from, map, Observable, switchMap, tap } from 'rxjs';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { addDoc, collection, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private usersCollection: CollectionReference<DocumentData>;

  constructor(
    private firestore: Firestore,
    private fireAuth: Auth) {
    this.usersCollection = collection(this.firestore, 'user');
  }

  register(user: User): Observable<boolean> {
    return from(createUserWithEmailAndPassword(this.fireAuth, user.email, user.password ?? '')).pipe(
      switchMap((userCredential) =>
        from(addDoc(this.usersCollection, {
          id: userCredential.user.uid,
          firstname: user.firstname,
          lastname: user.lastname,
          address: user.address,
          city: user.city,
          state: user.state,
          phone: user.phone,
          email: user.email,
          mobilephone: user.mobilephone,
        })).pipe(
          map(() => true)
        )
      ),
      catchError((error) => {
        throw new Error(error);
      })
    );
  }

  login(email: string, password: string): Observable<User | null> {
    return from(signInWithEmailAndPassword(this.fireAuth, email, password)).pipe(
      switchMap((userCredential) => {

        const userCollectionRef = collection(this.firestore, 'user');
        const queryUser = query(userCollectionRef, where('id', '==', userCredential.user.uid));

        return from(getDocs(queryUser)).pipe(
          map((querySnapshot) => {
            if (!querySnapshot.empty) {
              const docSnap = querySnapshot.docs[0];
              const data = docSnap.data() as User;
              return { id: docSnap.id, ...data };
            } else {
              throw new Error();
            }
          }),
        );
      }),
      catchError((error) => {
        console.error('Error:', error);
        throw new Error(error);
      })
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.fireAuth)).pipe(
      catchError((error) => {
        console.error('Logout error:', error);
        throw new Error();
      })
    );
  }

  getUser(): Observable<User | null> {
    return from(authState(this.fireAuth)).pipe(
      switchMap((user) => {

        const userCollectionRef = collection(this.firestore, 'user');
        const userQuery = query(userCollectionRef, where('id', '==', user.uid));

        return from(getDocs(userQuery)).pipe(
          map((querySnapshot) => {
            const docSnap = querySnapshot.docs[0];
            const data = docSnap.data() as User;
            return { id: docSnap.id, ...data };
          }),
        )
      }),
      catchError((error) => {
        console.error('Error in getUser:', error);
        throw new Error();
      })
    );
  }

  authenticated(): Observable<boolean> {
    return from(authState(this.fireAuth))
      .pipe(
        map(u => (u) ? true : false)
      );
  }

  loginGoogle(): Observable<User> {
    const provider = new GoogleAuthProvider();

    return from(signInWithPopup(this.fireAuth, provider)).pipe(
      map((userCredential) => {
        const user = userCredential.user;

        const newUser: User = {
          id: user.uid,
          firstname: user.displayName?.split(' ')[0] || '', // 
          lastname: user.displayName?.split(' ').slice(1).join(' ') || '', 
          address: '', 
          city: '', 
          state: '',
          phone: user.phoneNumber || '', 
          email: user.email || '', 
          mobilephone: '', 
        };

        return newUser;
      }),
      switchMap((newUser) => {
        const userDocRef = doc(this.firestore, `user/${newUser.id}`);
        return from(setDoc(userDocRef, newUser, { merge: true })).pipe(
          map(() => newUser) 
        );
      }),
      catchError((error) => {
        console.error('Erro ao autenticar com Google ou salvar no Firestore:', error);
        throw error;
      })
    );
  }
}
