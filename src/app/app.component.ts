import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Login', url: 'login', icon: 'paper-plane' },
    { title: 'Registrarse', url: 'crear-usuario', icon: 'heart' },
    { title: 'Crear Post', url: 'crear-post', icon: 'archive' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
