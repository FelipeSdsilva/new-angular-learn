import { Injectable } from '@angular/core';
import { CollectionReference } from '@angular/fire/firestore';
import { MyFile } from '../models/myfile.model';
import { Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private filesCollection: CollectionReference<MyFile>;

  constructor(
    private storage: Firestore,
    private afs: Firestore) {
    this.filesCollection = afs.collection('myfiles', ref => ref.orderBy('date', 'desc'));
  }

  uploadFile(f: File) {
    let path = `myfiles/${f.name}`;
    let task = this.storage.upload(path, f);

    task.snapshotChanges()
      .subscribe((s) => console.log(s));
  }

  upload(f: FileEntry) {
    let newfilename = `${(new Date()).getTime()}_${f.file.name}`;
    let path = `myfiles/${newfilename}`;
    f.task = this.storage.upload(path, f.file);
    f.state = f.task.snapshotChanges()
      .pipe(
        map((s) => f.task.task.snapshot.state),
        catchError(s => {
          return of(f.task.task.snapshot.state)
        })
      )
    this.fillAttributes(f);
    f.task.snapshotChanges().pipe(
      finalize(() => {
        if (f.task.task.snapshot.state == "success") {
          this.filesCollection.add({
            filename: f.file.name,
            path: path,
            date: (new Date()).getTime(),
            size: f.file.size
          });
        }
      })
    )
      .subscribe();
  }

  fillAttributes(f: FileEntry) {
    f.percentage = f.task.percentageChanges();
    f.uploading = f.state.pipe(map((s) => s == "running"));
    f.finished = from(f.task).pipe(map((s) => s.state == "success"));
    f.paused = f.state.pipe(map((s) => s == "paused"));
    f.error = f.state.pipe(map((s) => s == "error"));
    f.canceled = f.state.pipe(map((s) => s == "canceled"));
    f.bytesuploaded = f.task.snapshotChanges().pipe((map(s => s.bytesTransferred)));
  }

  getFiles(): Observable<MyFile[]> {
    return this.filesCollection.snapshotChanges()
      .pipe(map((actions) => {
        return actions.map(a => {
          const file: MyFile = a.payload.doc.data();
          const id = a.payload.doc.id;
          const url = this.storage.ref(file.path).getDownloadURL();
          return { id, ...file, url };
        })
      }))
  }

  deleteFile(f: MyFile) {
    this.storage.ref(f.path).delete();
    this.filesCollection.doc(f.id).delete();
  }
}
