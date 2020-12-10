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

  Usuarios(){
    this.router.navigate(['/usuario']);
  }
  Categorias(){
    this.router.navigate(['/categoria']);
  }
  Productos(){
    this.router.navigate(['/productos']);
  }
  Info(){
    this.router.navigate(['/info']);
  }
  Navegar(){
    this.router.navigate(['/login']);
  }

}
