import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Usuario } from '../models/usuario.model';
import { Usuarioalt } from '../models/usuarioalt.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor(
    private _http: HttpClient
  ) { }

  login(user: Usuarioalt): Observable<any>{
    var request = "api/manage/login"
    var url = environment.urlApiTiendaCubos + request
    var json = JSON.stringify(user)
    var headers = new HttpHeaders().set('Content-type', 'application/json')
    return this._http.post(url, json, {headers:headers})
  }

  register(user: Usuario):Observable <any>{
    var request = "api/manage/registrousuario"
    var url = environment.urlApiTiendaCubos + request
    var json = JSON.stringify(user)
    var headers = new HttpHeaders().set('Content-type', 'application/json')
    return this._http.post(url, json, {headers:headers})
  }

  getPerfilUsuario(token: string):Observable <any>{
    var request = "api/manage/perfilusuario"
    var url = environment.urlApiTiendaCubos + request
    var headers = new HttpHeaders().set('Authorization',"bearer "+token)
    return this._http.get(url, {headers: headers})
  }

  insertarPedido(idCubo: number, token: string):Observable<any>{
    var request = "api/compra/insertarpedido/" + idCubo
    var url = environment.urlApiTiendaCubos + request
    var headers = new HttpHeaders().set('Authorization', "bearer "+ token)
    return this._http.post(url, {headers: headers})
  }
}
