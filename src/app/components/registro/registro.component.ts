import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }
  public email: string='';
  public password: string ='';
  public isError = false;
  public msgError = '';
  ngOnInit() {
  }
  onAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then((res)=>{
      this.router.navigate(['/two']);
    }).catch(err=>console.log('err',err.message));
  }

}
