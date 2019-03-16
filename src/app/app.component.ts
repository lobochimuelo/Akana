import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Akana';
  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }
  public app_name: string = 'BookStore';
  public isLogged: boolean = false;
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }

 
}
