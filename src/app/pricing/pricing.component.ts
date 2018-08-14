import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthenVar} from '../Model/AuthenVar';
import moment = require("moment");
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {


  public defaultScenariosFondsDDT : any;
  public listScenarioRA: any;
  public listScenarioDDT: any;
  public dateTRansaction : string;
  public  listeRA : any ;
  public  listeDDT : any ;
  public voirCashflow : boolean ;
  public  dateT : string;


  // les champs de formulaire
  public sceRA : any ;
  public sceDDT : any ;
  public  dtTransaction : any ;
  public value1 : any  ;
  public value2 : any ;
  public value3 : any ;
  public value4 : any ;
  public value5 : any ;
  public value6 : any ;
  public value7 : any ;
  public value8 : any ;
  public value9 : any  ;
  public valueA : any ;
  public valueB : any ;
  public valueC : any ;
  public action : any ;
  public  actionToUse : number ;
  public dataForm = new FormData() ;

  public  dicountMarginA : any ;
  public  dicountMarginB : any ;
  public  dicountMarginC : any ;



  public var1: number ;
  public  var2 :number ;

  today = Date.now();

  // les données de la fonction doPricing coté backend

  public vecPricer : any ;
  public vecCashFlow :any ;
  public MyVecP1 : any ;
  public MyVecP2 : any ;
  public MyVecS : any ;

  public P1  = new Array<number>();
  public P2  = new Array<number>();
  public S  = new Array<number>();

 // ls dates de départ et de fin

  public  departP1 : any ;
  public  finP1 : any ;
  public  departP2 : any ;
  public  finP2 : any ;
  public  departS : any ;
  public  finS : any ;

  public  dataPricing  = new Array();
  public  headers = new Array<string>() ;

  constructor(private http: HttpClient, public au : AuthenVar) {}

  ngOnInit(): void {


    this.var1 = this.au.authent1 ;
    this.var2 = this.au.authent2;

    this.http.get('http://localhost:8088/api/scenariosFondsRa/').subscribe(
      data=>{
        this.listeRA = data ;

      }
    )


    this.http.get('http://localhost:8088/api/scenariosFondsDDT/').subscribe(
      data=>{
        this.listeDDT = data ;

      }
    )



    this.dataForm.append("sceRA", "1") ;
    this.dataForm.append("sceDDT", "1") ;
    this.dataForm.append("dtTransaction", "01/06/2018") ;
    this.dataForm.append("value1", "1") ;
    this.dataForm.append("value2", "1") ;
    this.dataForm.append("value3", "1") ;
    this.dataForm.append("value4", "1") ;
    this.dataForm.append("value5", "1") ;
    this.dataForm.append("value6", "1") ;
    this.dataForm.append("value7", "1") ;
    this.dataForm.append("value8", "1") ;
    this.dataForm.append("value9", "1") ;
    this.dataForm.append("valueA", "1") ;
    this.dataForm.append("valueB", "1") ;
    this.dataForm.append("valueC", "1") ;
    this.dataForm.append("action", "0") ;


    this.http.post('http://localhost:8088/api/fondsDataPricings/4',this.dataForm).subscribe(data => {
      // get data of listScenariosRA
       if (data['primeEspereeA']== null)
         this.dicountMarginA = 0.0 ;
       else
        this.dicountMarginA =  data['primeEspereeA'];

       if(data['primeEspereeB'] == null)
            this.dicountMarginB = 0.0 ;
       else
            this.dicountMarginB  =  data['primeEspereeB'];

       if(data['primeEspereeS'] == null )
         this.dicountMarginC = 0.0 ;
         else
         this.dicountMarginC =   data['primeEspereeS'];


      console.log('on doit normalement avoir les valeurs des 3 primes :  Part A ===> '+ this.dicountMarginA  + "Part B ==> " + this.dicountMarginB + "Part S ===> "+ this.dicountMarginC) ;

      this.listScenarioRA = data['listScenarioRA'];

      // get data of listScenariosRA
      this.defaultScenariosFondsDDT = data['defaultScenariosFondsDDT'];

      // get data of listScenariosDDT
      this.listScenarioDDT = data['listScenarioDDT'];

      // get transaction date
      this.dateTRansaction = data['dateTRansaction'];

      console.log('on affiche aussi les valeurs des scénarios ===> RA '+ this.listScenarioRA+" DDT "+this.listeDDT)
    });
  }

  calculerCashflow(){

    this.voirCashflow = true;
    this.doPricing();

  }

  doPricing(){

    const dataForm2 = new FormData() ;

    this.sceRA = ((document.getElementById("sceRA") as HTMLInputElement).value) ;
    this.sceDDT = ((document.getElementById("sceDDT") as HTMLInputElement).value) ;
    this.dtTransaction = ((document.getElementById("dtTransaction") as HTMLInputElement).value) ;
    this.value1 = ((document.getElementById("value1") as HTMLInputElement).value) ;
    this.value2 = ((document.getElementById("value2") as HTMLInputElement).value) ;
    this.value3 = ((document.getElementById("value3") as HTMLInputElement).value) ;
    this.value4 = ((document.getElementById("value4") as HTMLInputElement).value) ;
    this.value5 = ((document.getElementById("value5") as HTMLInputElement).value) ;
    this.value6 = ((document.getElementById("value6") as HTMLInputElement).value) ;
    this.value7 = ((document.getElementById("value7") as HTMLInputElement).value) ;
    this.value8 = ((document.getElementById("value8") as HTMLInputElement).value) ;
    this.value9 = ((document.getElementById("value9") as HTMLInputElement).value) ;
    this.valueA = ((document.getElementById("valueA") as HTMLInputElement).value) ;
    this.valueB = ((document.getElementById("valueB") as HTMLInputElement).value) ;
    this.valueC = ((document.getElementById("valueC") as HTMLInputElement).value) ;
    this.action = ((document.getElementById("action") as HTMLInputElement).value) ;

    // this.dateParse = new Date(moment(this.dateTRansaction,"MM-YY-YYYY"));

    this.actionToUse = parseInt(this.action) ;
    this.dateT =  moment(this.dateTRansaction).format('MM/DD/YYYY');

    console.log('la date de transaction ====> ' + this.dateTRansaction) ;

    dataForm2.append("sceRA", this.sceRA) ;
    dataForm2.append("sceDDT", this.sceDDT) ;
    dataForm2.append("dtTransaction", this.dateTRansaction) ;
    dataForm2.append("value1", this.value1) ;
    dataForm2.append("value2", this.value2) ;
    dataForm2.append("value3", this.value3) ;
    dataForm2.append("value4", this.value4) ;
    dataForm2.append("value5", this.value5) ;
    dataForm2.append("value6", this.value6) ;
    dataForm2.append("value7", this.value7) ;
    dataForm2.append("value8", this.value8) ;
    dataForm2.append("value9", this.value9) ;
    dataForm2.append("valueA", this.valueA) ;
    dataForm2.append("valueB", this.valueB) ;
    dataForm2.append("valueC", this.valueC) ;
    dataForm2.append("action", this.action) ;


    console.log('========'+this.dateT+ '===========') ;


    this.http.post('http://localhost:8088/api/fondsDataPricings/4', dataForm2).subscribe(
      data=> {
        console.log('les données ont été bien ajoutés');
        this.vecPricer = data['vecPricer'];
        this.vecCashFlow = data['vecCashFlow'];
        this.MyVecP1 = data['myVectorP1'];
        this.MyVecP2 = data['myVectorP2'];
        this.MyVecS = data['myVectorS'];


        this.departP1 = data['dateDepartP1'] ;
        this.departP2 = data['dateDepartP2'] ;
        this.departS = data['dateDepartS'] ;

        this.finP1 = data['dateFinP1'];
        this.finP2 = data['dateFinP2'];
        this.finS = data['dateFinS'];

        this.P1 = this.MyVecP1 ;
        this.P2 = this.MyVecP2 ;
        this.S = this.MyVecS ;

        console.log('date départ P1 ==>'+ this.departP1+ " date fin P1 ==>"+ this.finP1) ;

        this.dataPricing = data['vecPricer'] ;
        this.headers = this.dataPricing[0];

      },
      (err :   HttpErrorResponse) => {
        console.log(err.message) ;
      }
    );
  }
}

export class ScenarioRa {

  idScenarioFondsRa: number;
  valueScenarioFondsRa : number;


  constructor(idScenarioFondsRa:number, valueScenarioFondsRa:number) {

    this.idScenarioFondsRa=idScenarioFondsRa;
    this.valueScenarioFondsRa=valueScenarioFondsRa;

  }
}

export class ScenarioDtt {

  idScenarioDdt: number;
  valueScenario : number;

  constructor(idScenarioDdt:number, valueScenario:number) {

    this.idScenarioDdt=idScenarioDdt;
    this.valueScenario=valueScenario;

  }

}

