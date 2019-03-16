import { NgForm } from '@angular/forms/src/directives/ng_form';
import { LocalInterface } from './../../models/local';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';


@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {
  local: LocalInterface = {
    entrada: '',
    nombre: '',
    postre: '',
    segundo: '',
    sopa: '',
    direccion: '',
    tipo: '',
    precio: '',

  };

  constructor(private localService: DataApiService) { }
  ngOnInit() {
  }
  onSaveLocal(myForm: NgForm ){
   
    if (myForm.valid === true) {
      console.log('ok');
      this.localService.addLocal(this.local);
      myForm.resetForm();
    } else {
      console.log('Algo va mal');
    }    
  }
}
