import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, orderBy, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { FileEntry } from '../models/fileentry.model';
import { MyFile } from '../models/myfile.model';


@Injectable({
  providedIn: 'root',
})
export class FilesService {

  private filesCollection;

  constructor(private firestore: Firestore, private storage: Storage) {
    this.filesCollection = collection(this.firestore, 'myfiles');
  }

  uploadFile(file: File): Observable<number> {
    const path = `myfiles/${file.name}`;
    const storageRef = ref(this.storage, path);
    const task = uploadBytesResumable(storageRef, file);
  
    return new Observable<number>((observer) => {
      task.on(
        'state_changed',
        (snapshot) => {
          // Calcula o progresso do upload em porcentagem
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          observer.next(progress);
        },
        (error) => {
          // Emite erro caso ocorra falha
          observer.error(error);
        },
        async () => {
          // Completa o observable ao término do upload
          observer.complete();
          const downloadURL = await getDownloadURL(storageRef);
          console.log('File available at', downloadURL);
        }
      );
    });
  }
  
  upload(fileEntry: FileEntry): void {
    const newFileName = `${new Date().getTime()}_${fileEntry.file.name}`;
    const path = `myfiles/${newFileName}`;
    const storageRef = ref(this.storage, path);
    const task = uploadBytesResumable(storageRef, fileEntry.file);

    fileEntry.state = new Observable<string>((observer) => {
      task.on(
        'state_changed',
        (snapshot) => {
          observer.next(snapshot.state);
        },
        (error) => {
          observer.error(error);
        },
        () => {
          observer.complete();
        }
      );
    });

    this.fillAttributes(fileEntry, task);

    task.on(
      'state_changed',
      null,
      null,
      async () => {
        if (task.snapshot.state === 'success') {
          const fileData: MyFile = {
            filename: fileEntry.file.name,
            path,
            date: new Date().getTime(),
            size: fileEntry.file.size,
          };
          await addDoc(this.filesCollection, fileData);
        }
      }
    );
  }

  fillAttributes(fileEntry: FileEntry, task: any): void {
    fileEntry.percentage = new Observable<number>((observer) => {
      task.on('state_changed', (snapshot: any) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        observer.next(progress);
      });
    });

    fileEntry.uploading = fileEntry.state.pipe(map((state) => state === 'running'));
    fileEntry.finished = fileEntry.state.pipe(map((state) => state === 'success'));
    fileEntry.paused = fileEntry.state.pipe(map((state) => state === 'paused'));
    fileEntry.error = fileEntry.state.pipe(map((state) => state === 'error'));
    fileEntry.canceled = fileEntry.state.pipe(map((state) => state === 'canceled'));
    fileEntry.bytesUploaded = new Observable<number>((observer) => {
      task.on('state_changed', (snapshot: any) => {
        observer.next(snapshot.bytesTransferred);
      });
    });
  }

  getFiles(): Observable<MyFile[]> {
    const filesQuery = query(this.filesCollection, orderBy('date', 'desc'));
    return collectionData(filesQuery, { idField: 'id' }).pipe(
      map((files: MyFile[]) =>
        files.map(async (file) => {
          const url = await getDownloadURL(ref(this.storage, file.path));
          return { ...file, url };
        })
      )
    ) as Observable<MyFile[]>;
  }

  async deleteFile(file: MyFile): Promise<void> {
    const fileRef = ref(this.storage, file.path);
    await deleteObject(fileRef);
    const docRef = doc(this.firestore, `myfiles/${file.id}`);
    await deleteDoc(docRef);
  }
}