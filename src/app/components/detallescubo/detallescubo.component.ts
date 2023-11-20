import { Component, OnInit } from '@angular/core';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { CubosService } from 'src/app/services/cubos.service';
import { ActivatedRoute, Params } from '@angular/router'
import { Comentario } from 'src/app/models/comentario.model';
import { Cubo } from 'src/app/models/cubo.model';

@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrls: ['./detallescubo.component.css']
})
export class DetallescuboComponent implements OnInit{

  public cubo!: Cubo
  public comentarios!: Array<Comentario>

  constructor(
    private _cubosService: CubosService,
    private _comentariosService: ComentariosService,
    private _activeRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(parametros => {
      var id = parametros['id']

      this._cubosService.getDetalleCubo(id).subscribe(response => {
        this.cubo = response
      })

      this._comentariosService.getComentariosCubo(id).subscribe(response => {
        this.comentarios = response 
      })
    })
  }
}
