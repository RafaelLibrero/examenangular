import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private _http: HttpClient
  ) { }

  getComentariosCubo(idCubo: any):Observable <any>{
    var request = "api/comentarioscubo/getcomentarioscubo/" + idCubo
    var url = environment.urlApiTiendaCubos + request
    return this._http.get(url)
  }
}
