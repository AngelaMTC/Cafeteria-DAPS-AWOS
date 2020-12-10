import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InfoComponent } from './componentes/info/info.component';
import { LoginComponent } from './componentes/login/login.component';
import { PipesComponent } from './componentes/pipes/pipes.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent },
  {path: 'categoria', component: CategoriaComponent},
  {path: 'usuarios', component: UsuariosComponent },
  {path: 'navbar', component: NavbarComponent },
  {path: 'info', component: InfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pipes', component: PipesComponent}
  // {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
