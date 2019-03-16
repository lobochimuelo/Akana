import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public locales = [];
  public local = '';
  ngOnInit() {
    this.dataApi.getAllLocals().subscribe(locales => {
      console.log('Locales', locales);
      this.locales =locales;
    })

  }

}
