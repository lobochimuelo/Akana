import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  public email: string = '';
  public password: string = '';
  public isWrong: boolean = false;
  public isLogged: boolean = false;

  ngOnInit() {
    console.log(this.isLogged+"asdas");
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
  onLogin(): void {
   
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        // this.router.navigate(['/two']);
        this.isLogged=true;
      }).catch(err =>this.isWrong = true );
  }
  
   onLogout(){
      this.authService.logoutUser();
      this.isLogged=false;
      this.isWrong=false;
 }
}
