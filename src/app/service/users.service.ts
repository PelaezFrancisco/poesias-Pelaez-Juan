import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../domain/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public afs: AngularFirestore) { }

  save(electrodomestico: User){
    const refElectro = this.afs.collection("Users");

    if (electrodomestico.uid == null){
      electrodomestico.uid = this.afs.createId();
      
    }

    refElectro.doc(electrodomestico.uid).set(Object.assign({},electrodomestico));
  }

  getUsers(): Observable<any[]> {
    return this.afs.collection("Users").valueChanges();
  }

  findElectrodomesticos(busqueda): Observable<any[]> {
    return this.afs.collection("Users",
    ref => ref.where("name","==",busqueda)).valueChanges();
  }
}
