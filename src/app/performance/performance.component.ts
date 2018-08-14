import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jsPDF from 'jspdf';
import {AuthenVar} from '../Model/AuthenVar';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})

export class PerformanceComponent implements OnInit {


  public vecPerformanceACtif: any;
  public headers: any;
  public  vecData : any ;


  public var1: number ;
  public  var2 :number ;
  constructor(private http: HttpClient,  public au : AuthenVar) {}

  ngOnInit(){

    this.var1 = this.au.authent1 ;
    this.var2 = this.au.authent2;
    this.http.get('http://localhost:8088/api/performanceCollaterals/4').subscribe(data => {
      // Read the result field from the JSON response.
      this.vecPerformanceACtif = data['dataPerformanceActif'];

      // Read the result field from the JSON response.
      this.headers = data['headers'];
    });
  }




}
