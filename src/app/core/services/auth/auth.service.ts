import { Injectable } from '@angular/core';
import { UsersService } from '../Users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private usersService:UsersService) { }
  getDecodedToken(): any {
    const token = this.usersService.getToken();
    if (!token) return null;

    try {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload);
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }
  getUsuarioId(): number {
    const decodedToken = this.getDecodedToken();
    return decodedToken ? Number(decodedToken['id']) : 0;
  }
}
