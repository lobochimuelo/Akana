import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  public email: string = '';
  public password: string = '';
  ngOnInit() {

   
  }
  onLogin(): void {
   
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/two']);
      }).catch(err => console.log('err', err.message));
  }
  
   onLogout(){
      this.authService.logoutUser();
 }
}
