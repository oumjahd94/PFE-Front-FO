import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthenVar} from '../Model/AuthenVar';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  public vecObligationA: any;
  public vecObligationB: any;
  public vecObligationS: any;
  public headers: any;

  public var1: number ;
  public  var2 :number ;

  constructor(private http: HttpClient, public au : AuthenVar) {}

  ngOnInit() {

    this.var1 = this.au.authent1 ;
    this.var2 = this.au.authent2;
    console.log('voici les valeurs ===> '+this.var1 +" ******* "+this.var2) ;

    this.http.get('http://localhost:8088/api/fondsDataHistoriques/4').subscribe(data => {
      // Read the result field from the JSON response.
      this.vecObligationA = data['vecObligationA'];
      // Read the result field from the JSON response.
      // Read the result field from the JSON response.
      this.vecObligationB = data['vecObligationB'];
      this.vecObligationS = data['vecObligationS'];
      this.headers = data['headers'];
    });


  }

  recharger(){
    location.reload() ;
  }



}
