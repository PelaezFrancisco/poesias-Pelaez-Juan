import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../../domain/Users';
import { UsersService } from '../../../service/users.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  user : User = new User();

  constructor(public afAuth: AngularFireAuth, private userService: UsersService) { }

  ngOnInit() {
  }

  async createAccount() {
    const user = await this.afAuth.createUserWithEmailAndPassword(
      this.user.email, 
      this.user.password);

      this.userService.save(this.user)
      console.log(user);

  }

  async login() {}

  async logout() {
    await this.afAuth.signOut();
  }

}
