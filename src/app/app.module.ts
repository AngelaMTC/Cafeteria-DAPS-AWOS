import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './componentes/info/info.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    ProductosComponent,
    CategoriaComponent,
    UsuariosComponent,
    InfoComponent,
    PipesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
  {path: 'productos', component: ProductosComponent },
  {path: 'categoria', component: CategoriaComponent},
  {path: 'usuarios', component: UsuariosComponent },
  {path: 'navbar', component: NavbarComponent },
  {path: 'info', component: InfoComponent},
  {path: 'login', component: LoginComponent},
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
