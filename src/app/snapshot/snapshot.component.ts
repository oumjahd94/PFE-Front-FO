import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {


  public vecRendement: any;
  public vecPresentation: any;
  public vecCompteHeaders: any;
  public vecCompteData: any;
  public selectedRow: Number;
  public setClickedRow: Function;
  public vecPassif: any;
  public headerPassif : any;
  public header : any;

  constructor(private http: HttpClient) {

    this.setClickedRow = function(index){
      this.selectedRow = index;
    };
  }

  ngOnInit(): void {


    this.http.get('http://localhost:8088/api/fondsDataSnapshotsFo/4').subscribe(data => {
      // Read the result field from the JSON response.
      this.vecRendement = data['vecRendement'];
      console.log( this.vecRendement );
      // Read the result field from the JSON response.
      this.vecPresentation = data['vecPresentation'];
      console.log(this.vecPresentation);
      // Read the result field from the JSON response Compte de réserve headers.
      this.vecCompteHeaders = data['vecCompteHeaders'];
      console.log(this.vecCompteHeaders);
      // Read the result field from the JSON response Compte de réserve data.
      this.vecCompteData = data['vecCompteData'];
      console.log(this.vecCompteData);
      // structure du passif data
      this.vecPassif = data['vecPassif'];
      this.header = this.vecPassif[0][0];
      //this.vecPassif= this.vecPassif.delete(this.headerPassif);
      //this.vecPassif = this.vecPassif.removeAt(1);
      console.log(this.vecPassif);
    });
  }
}

