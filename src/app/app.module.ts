import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { UsuariocomprasComponent } from './components/usuariocompras/usuariocompras.component';
import { CompracuboComponent } from './components/compracubo/compracubo.component';
import { ComentariosService } from './services/comentarios.service';
import { CompraService } from './services/compra.service';
import { ManageService } from './services/manage.service';
import { CubosService } from './services/cubos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CubosmarcaComponent,
    DetallescuboComponent,
    RegisterComponent,
    LoginComponent,
    PerfilusuarioComponent,
    UsuariocomprasComponent,
    CompracuboComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, 
    ComentariosService,
    CompraService,
    ManageService,
    CubosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
