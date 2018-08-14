import {Injectable} from '@angular/core';
import {Http, ResponseContentType} from '@angular/http';
import { saveAs } from 'file-saver';

@Injectable()
export class ViewService {

  static readonly BASE_URL = 'http://localhost:8088/api/fondsDataRapport/downloadPDF/';

  constructor(private http: Http) {
  }

  public generateView(id :number) {
    console.log('on vérifie encore une fois la valeur de id ==> '+id)
    return this.http.get(ViewService.BASE_URL+id,{
      responseType: ResponseContentType.Blob
    });
  }

  public saveReport(response: any, fichier : string) {
    const blob = new Blob([response.blob()], {type: 'application/pdf'});
    const filename = fichier;
    saveAs(blob, filename);
  }

}
