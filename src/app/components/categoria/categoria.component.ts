import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CategoriaService } from 'src/app/service/categoria.service';
import { CategoriaModel } from 'src/app/models/categoria';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
});

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Output() salida = new EventEmitter();
  categoria: CategoriaModel = new CategoriaModel();
  BD: any = [];
  IDCatAct: string;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService
      .obtenerCat()
      .then((data: any) => {
        this.BD = data.categorias;
        console.log(this.BD);
      }).catch((err) => {
        console.log(err,'Ha ocurrido un fallo.');
      });
  }

  registrar(forma: NgForm) {
    this.categoriaService
      .registrarCat(this.categoria)
      .then((productos: any) => {
        Toast.fire(productos.msg, 'Se ha registrado exitosamente.');
        forma.reset();
        this.salida.emit();
      }).catch((err: any) => {
        Toast.fire(err,'Algo salió mal al momento de registrar.');
      });
  }

  actualizar(forma: NgForm) {
    this.categoriaService
      .actualizarCat(this.IDCatAct, this.categoria)
      .then((usuario: any) => {
        Toast.fire(usuario.msg,'Se ha actualizado con éxito.');
        forma.reset();
        this.salida.emit();
      }).catch((err: any) => {
        Toast.fire(err.console.error.msg,'Algo salió mal al momento de actualizar.');
      });
  }

  Actualizacion(idUsuario: string) {​​​​
    this.IDCatAct = idUsuario;
    console.log(idUsuario);
  }​​​​
  

  eliminar(idCategoria: string) {​​​​
    this.IDCatAct = idCategoria;
    console.log(idCategoria);
    this.categoriaService
      .eliminarCat(idCategoria)
      .then((usuario: any) => {​​​​
        Toast.fire(usuario.msg,'Se ha eliminado correctamente.');
        this.salida.emit();
      }​​​​).catch((err: any) => {​​​​
        Toast.fire(err.console.err.msg, 'Algo salió mal al momento de eliminar.');
        }​​​​);
  }​​​​
}
