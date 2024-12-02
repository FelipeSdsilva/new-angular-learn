import { UploadTask } from "firebase/storage";
import { Observable } from "rxjs";

export interface FileEntry {
  file: File;
  task?: any; // Ajuste conforme o tipo retornado pelo AngularFireStorage
  percentage: Observable<number>;
  uploading: Observable<boolean>;
  finished: Observable<boolean>;
  paused: Observable<boolean>;
  error: Observable<boolean>;
  canceled: Observable<boolean>;
  bytesUploaded: Observable<number>;
  state: Observable<string>;
}
