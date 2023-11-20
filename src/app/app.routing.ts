import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CubosmarcaComponent } from "./components/cubosmarca/cubosmarca.component";
import { DetallescuboComponent } from "./components/detallescubo/detallescubo.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PerfilusuarioComponent } from "./components/perfilusuario/perfilusuario.component";
import { UsuariocomprasComponent } from "./components/usuariocompras/usuariocompras.component";
import { CompracuboComponent } from "./components/compracubo/compracubo.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cubos/:marca', component: CubosmarcaComponent},
    {path: 'detalles/:id', component: DetallescuboComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'usuario', component: PerfilusuarioComponent},
    {path: 'usuariocompras', component: UsuariocomprasComponent},
    {path: 'compracubo', component: CompracuboComponent}
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)