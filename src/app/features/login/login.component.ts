import { Component, ViewChild } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-login',
  imports: [
    LoginFormComponent,
    NzGridModule,
    NzTabsModule,
    CommonModule,
    FormsModule,
    RegistroComponent,
    NzDividerModule ,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('tabset') tabset!: NzTabSetComponent;

  onRegisterSuccess() {
    // Cambiar al tab de "Login" cuando el registro sea exitoso
    this.tabset.nzSelectedIndex = 0; // 0 es el índice del tab de "Login"
  }
}
