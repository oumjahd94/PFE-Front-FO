import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import { RapportModel } from '../Model/rapport';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export  class RapportService{

    private urlRapport = "http://localhost:8888/api/FondsDataRapport";

    constructor(private http: Http) {

    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }


    public YearOfRepport(){

      console.log('je suis là au moins')
       return this.http.get("http://localhost:8888/api/FondsDataRapport/vecAnnee")
         .map(resp => resp.json());
    }

    public ListeRapportByFonds(idTypeCredilog) : Observable<RapportModel[]> {

        return this.http.get(`${this.urlRapport}/${idTypeCredilog}`)
            .map((response: Response) => {
                return <RapportModel[]>response.json();
            })
            .catch(this.handleError);
    }

}
