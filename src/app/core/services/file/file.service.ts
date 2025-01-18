import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../Users/users.service';
import { Observable } from 'rxjs';
import { RespuestaArchivosCarpetas } from '../../../models/archivo';
import { Detalles } from '../../../models/detalles';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private usersService: AuthService) {}

  loadListaArchivo(carpeta: string): Observable<RespuestaArchivosCarpetas> {
    const data = {
      carpeta: carpeta,
    };
    console.log(this.usersService.getUsuarioId())
    return this.http.post<RespuestaArchivosCarpetas>(
      `${this.apiUrl}listar/archivos/${this.usersService.getUsuarioId()}/`,
      data
    );
  }
  loadDetalle(carpeta: string, name:string): Observable<Detalles>{
    const data = {
      carpeta: carpeta,
      file_name:name
    };
    console.log(this.usersService.getUsuarioId())
    return this.http.post<Detalles>(
      `${this.apiUrl}detalle/archivo/${this.usersService.getUsuarioId()}/`,
      data
    );
  }

  descargarArchivo(ruta:string,file_name:string) : Observable<Blob>{
    const data = {
      ruta: ruta,
      file_name:file_name
    };
    return this.http.post(
      `${this.apiUrl}descargar/file/${this.usersService.getUsuarioId()}/`,
      data, {
        responseType: 'blob' 
      }
    );
  }
}
