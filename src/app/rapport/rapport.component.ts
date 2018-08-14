import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ViewService} from '../Model/ViewService';
import {Router} from '@angular/router';
import {RapportModel} from '../Model/rapport';
import {RapportService} from '../services/RapportService';
import {AuthenVar} from '../Model/AuthenVar';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {

  public idRapport : number = 20;
  public message: string;
  public status = 0;
  public listOfRapports : RapportModel[] ;
  public vecAnneeR : any ;
  public var1: number ;
  public  var2 :number ;
  constructor(private http: HttpClient,
              public viewService: ViewService, protected router: Router,
              private rapportService : RapportService, public au : AuthenVar
  ) {
  }

  ngOnInit() {

    this.var1 = this.au.authent1 ;
    this.var2 = this.au.authent2;

    this.getRapport();
    this.getAnneeRapport();
  }

  //récupérer la liste des années

  public getAnneeRapport():void {
      this.rapportService.YearOfRepport().subscribe(
        data => this.vecAnneeR = data,
        error =>console.log("erreur de requête"+ error)
      )
  }

  // récupérer les rapports de fonds 4
  public getRapport():void {
    this.rapportService.ListeRapportByFonds(4).subscribe(
      data => this.listOfRapports = data,
      error => console.log("erreur de requête" + error)
    )
  }

  public downloadRapport(idR:number, fichier: string) {
     console.log('on affiche ici la valeur de Id ===> '+idR)
    this.viewService.generateView(idR)
      .subscribe(response => {
          if (response != null) {
            this.viewService.saveReport(response, fichier);
            console.log('found')

          } else {
          console.log('not found')
          }

        this.status = 1;

        },
        error2 => this.status = 2);
  }

  /*

    public onGenerateView() {
      this.generate();
    }
  */


    public doLoop(nbre : number){
      for(let i = 0 ; i<nbre; i++)
        console.log('--')
    }

/*
  public downloadFile() {

    console.log('je suis là au moins');
    this.http.get(
      'http://localhost:8088/api/fondsDataRapport/downloadPDF/20').subscribe(
      (data) => {
        console.log('la requête a-t_i résussie ?');
        var mediaType = 'application/pdf';
        // console.log(data);
        var blob = new Blob([data], {type: 'application/pdf'});
        // console.log(blob);
        saveAs(blob, 'testData.pdf');
      });
  };
*/


}
