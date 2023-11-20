import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(
    private _http: HttpClient
  ) { }

  getCompras(token: string):Observable <any>{
    var request = "api/compra/comprasusuario"
    var url = environment.urlApiTiendaCubos + request
    var headers = new HttpHeaders().set('Authorization', "bearer "+token)
    return this._http.get(url, {headers:headers})
  }
}
