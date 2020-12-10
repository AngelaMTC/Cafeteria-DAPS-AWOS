import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import{RouterModule} from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { PipesComponent } from './components/pipes/pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    InfoComponent,
    ProductosComponent,
    CategoriaComponent,
    UsuariosComponent,
    LoginComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'usuario', component: UsuariosComponent},
      {path: 'categoria', component: CategoriaComponent},
      {path: 'producto', component: ProductosComponent},
      {path: 'login', component: LoginComponent},
      {path: 'info', component: InfoComponent},
      {path: 'pipes', component: PipesComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
