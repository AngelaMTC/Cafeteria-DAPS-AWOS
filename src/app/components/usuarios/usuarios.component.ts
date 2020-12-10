import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service';
import { UsuarioModel } from '../../models/usuario';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
});

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  @Output() salida = new EventEmitter();
  usuario: UsuarioModel = new UsuarioModel();
  BD: any = [];
  idUsrAct: any;

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit() {
    this.usuarioService
      .obtenerUsr()
      .then((data: any) => {
        this.BD = data.usuarios;
        console.log(this.BD);
      })
      .catch((err) => {
        console.log(err,'Ha ocurrido un error.');
      });
  }

  registrar(forma: NgForm) {
    this.usuarioService
      .registrarUsr(this.usuario)
      .then((usuario: any) => {
        Toast.fire(usuario.msg,'Se ha registrado con éxito.');
        forma.reset();
        this.salida.emit();
      }).catch((err: any) => {
        Toast.fire(err.console.error.msg,'Algo salió mal al momento de registrar.');
      });
  }

  actualizar(forma: NgForm) {
    this.usuarioService
      .actualizarUsr(this.idUsrAct, this.usuario)
      .then((usuario: any) => {
        Toast.fire(usuario.msg,'Se ha actualizado con éxito.');
        forma.reset();
        this.salida.emit();
      }).catch((err: any) => {
        Toast.fire(err.console.error.msg,'Algo salió mal al momento de actualizar.');
      });
  }

  Actualizacion(idUsr: string) {
    this.idUsrAct = idUsr;
    console.log(this.idUsrAct);
  }

  eliminar(idUsr: string) {
    this.idUsrAct = idUsr;
    console.log(idUsr);
    this.usuarioService
      .eliminarUsr(idUsr)
      .then((usuario: any) => {
        Toast.fire(usuario.msg,'Se ha eliminado correctamente.');
        this.salida.emit();
      }).catch((err: any) => {
        Toast.fire(err.console.err.msg, 'Algo salió mal al momento de eliminar.');
      });
  }
}
