import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public marcas!: Array<string>

  constructor(private _cubosService: CubosService){}

  ngOnInit(): void {
    this._cubosService.getMarcasCubos().subscribe(response => {
      this.marcas = response
    })
  }

  logout(){
    localStorage.removeItem('token')
  }
}
