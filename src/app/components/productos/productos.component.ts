import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosService } from '../../service/productos.service';
import { ProductosModel } from '../../models/productos';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
});

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Output() salida = new EventEmitter();
  productos: ProductosModel = new ProductosModel();
  BD: any = [];
  IDProAct: string;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService
      .obtenerPro()
      .then((data: any) => {
        this.BD = data.productos;
        console.log(this.BD);
      }).catch((error) => {
        console.log('Ha ocurrido un error.');
      });
  }

  registrar(forma: NgForm) {
    this.productosService
      .registarPro(this.productos)
      .then((productos: any) => {
        Toast.fire(productos.msg, 'Se ha registrado exitosamente.');
        forma.reset();
        this.salida.emit();
      }).catch((err: any) => {
        Toast.fire(err.console.error.msg, 'Ha ocurrido un error al momento de registrar.');
      });
  }
  actualizar(forma: NgForm) {
    this.productosService
      .actualizarPro(this.IDProAct, this.productos)
      .then((productos: any) => {
        Toast.fire(productos.msg, 'Se ha actualizado exitosamente.');
        forma.reset();
        this.salida.emit();
      }).catch((err: any) => {
        Toast.fire(err.console.error.msg, 'Ha ocurrido un error al momento de actualizar.');
      });
  }

  Actualizacion(idUsuario: string) {
    this.IDProAct = idUsuario;
    console.log(idUsuario);
  }
  eliminar(idProducto: string) {
    this.IDProAct = idProducto;
    console.log(idProducto);
    this.productosService
      .eliminarPro(idProducto)
      .then((usuario: any) => {
        Toast.fire(usuario.msg, 'Se ha eliminado con éxito.');
        this.salida.emit();
      }).catch((err: any) => {
        Toast.fire(err.console.error.msg, 'Ha ocurrido un error al momento de eliminar.');
      });
  }

}
