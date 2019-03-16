import { LocalInterface } from './../models/local';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
   
  }
  private localCollections: AngularFirestoreCollection<LocalInterface>;
  private locales: Observable<LocalInterface[]>;
  private book: Observable<LocalInterface>
  private localDoc: AngularFirestoreDocument<LocalInterface>;
 
  getAllLocals(){
  this.localCollections = this.afs.collection<LocalInterface>('locales');
    return this.locales = this.localCollections.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as LocalInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  addLocal(local: LocalInterface){
    this.localCollections.add(local);
  }
  updateLocal(local: LocalInterface): void{
    let idLocal = local.id;
    this.localDoc = this.afs.doc<LocalInterface>(`locales/${idLocal}`);
    this.localDoc.update(local);  }
}
