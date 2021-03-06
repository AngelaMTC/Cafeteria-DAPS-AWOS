import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  NavegaraUsuarios(){
    this.router.navigate(['/usuarios']);
  }
  NavegaraCategorias(){
    this.router.navigate(['/categoria']);
  }
  NavegaraProductos(){
    this.router.navigate(['/productos']);
  }
  NavegaraAcercade(){
    this.router.navigate(['/info']);
  }
  NavegarPipes(){
    this.router.navigate(['/pipes']);
  }

}
