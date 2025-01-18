import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListaArchivoComponent } from './lista-archivo/lista-archivo.component';
import { ArchivoCompartidoComponent } from './archivo-compartido/archivo-compartido.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ListaArchivoComponent },
      { path: 'documentos', component: ListaArchivoComponent },
      { path: 'compartido', component: ArchivoCompartidoComponent },

    ]
  },
];
//ArchivoCompartidoComponent