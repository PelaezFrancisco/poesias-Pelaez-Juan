import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Posts } from '../domain/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public afs: AngularFirestore) { }

  save(electrodomestico: Posts){
    const refElectro = this.afs.collection("Posts");

    if (electrodomestico.uid == null){
      electrodomestico.uid = this.afs.createId();
      
    }

    refElectro.doc(electrodomestico.uid).set(Object.assign({},electrodomestico));
  }

  getPosts(): Observable<any[]> {
    return this.afs.collection("Posts").valueChanges();
  }

  findElectrodomesticos(busqueda): Observable<any[]> {
    return this.afs.collection("Posts",
    ref => ref.where("title","==",busqueda)).valueChanges();
  }
}
