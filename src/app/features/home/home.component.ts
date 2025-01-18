import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { ListaArchivoComponent } from './lista-archivo/lista-archivo.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MenuComponent , RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
