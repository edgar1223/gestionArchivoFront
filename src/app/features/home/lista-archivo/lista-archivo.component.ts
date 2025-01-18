import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RespuestaArchivosCarpetas } from '../../../models/archivo';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FileService } from '../../../core/services/file/file.service';
import { Detalles } from '../../../models/detalles';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'app-lista-archivo',
  imports: [
    CommonModule,
    NzCardModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzDescriptionsModule,
  ],
  templateUrl: './lista-archivo.component.html',
  styleUrls: ['./lista-archivo.component.css'],
})
export class ListaArchivoComponent implements OnInit {
  lista: RespuestaArchivosCarpetas = { archivos: [], carpetas: [] };
  detalle: Detalles | null = null;
  carpeta: string[] = ['home'];
  constructor(
    private authService: AuthService,
    private fileService: FileService
  ) {}

  ngOnInit() {
    this.loadListaArchivo('/');
  }

  loadListaArchivo(carpeta: string) {
    this.fileService.loadListaArchivo(carpeta).subscribe((respuesta) => {
      console.log(respuesta);
      this.lista = respuesta;
    });
  }
  getCarpeta(c: string) {
    this.carpeta.push(c);
    this.loadListaArchivo(c);
    console.log(this.carpeta);
  }
  navigateTo(selectedCarpeta: string): void {
    const index = this.carpeta.indexOf(selectedCarpeta);
    if (selectedCarpeta == 'home') {
      this.loadListaArchivo('/');
    } else {
      this.loadListaArchivo(selectedCarpeta);
    }
    if (index > -1) {
      // Conservar los elementos hasta el índice encontrado
      this.carpeta = this.carpeta.slice(0, index + 1);
    }
  }
  atras() {
    const anterior = this.carpeta[this.carpeta.length - 2];
    if (anterior == 'home') {
      this.loadListaArchivo('/');
    } else {
      this.loadListaArchivo(anterior);
    }
    this.carpeta.pop();
  }

  loadDetalle(name: string) {
    const anterior = this.carpeta[this.carpeta.length - 1];
    if (anterior == 'home') {
      this.fileService.loadDetalle('/', name).subscribe((repuesta) => {
        this.detalle = repuesta;
      });
    } else {
      this.fileService.loadDetalle(anterior, name).subscribe((repuesta) => {
        this.detalle = repuesta;
      });
    }
  }
  eliminarDetalle() {
    this.detalle = null;
  }
  descargarArchivo( file_name: string) {
    const ruta = this.detalle?.ruta_completa.match(/^[^\/]+/)?.[0] || '';
    this.fileService.descargarArchivo(ruta, file_name).subscribe((repuesta) => {
      const url = window.URL.createObjectURL(repuesta);
      const a = document.createElement('a');
      a.href = url;
      a.download = file_name; // Nombre del archivo
      a.click(); // Simula el clic para descargar
      window.URL.revokeObjectURL(url);
    });
  }
}
