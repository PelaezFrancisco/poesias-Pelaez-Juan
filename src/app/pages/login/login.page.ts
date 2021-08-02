import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../domain/Users';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user : User = new User();

  constructor(public afAuth: AngularFireAuth, private userService: UsersService) { }

  ngOnInit() {
  }

  async login() {
    const user = await this.afAuth.signInWithEmailAndPassword(
      this.user.email, 
      this.user.password);

      console.log(user)

  }

  async logout() {
    await this.afAuth.signOut();
  }

 

}
