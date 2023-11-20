import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CubosService {

  constructor(private _http: HttpClient) { }

  getCubos(): Observable<any>{
    var request = "api/cubos"
    var url = environment.urlApiTiendaCubos + request
    return this._http.get(url)
  }

  getMarcasCubos(): Observable<any>{
    var request = "api/cubos/marcas"
    var url = environment.urlApiTiendaCubos + request
    return this._http.get(url)
  }

  getCubosByMarca(marca: string):Observable <any>{
    var request = "api/cubos/cubosmarca/" + marca
    var url = environment.urlApiTiendaCubos + request
    return this._http.get(url)
  }

  getDetalleCubo(idCubo: any):Observable <any>{
    var request = "api/cubos/" + idCubo
    var url = environment.urlApiTiendaCubos + request
    return this._http.get(url)
  }
}
