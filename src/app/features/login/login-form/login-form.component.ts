import { Component } from '@angular/core';
import { UsersService } from '../../../core/services/Users/users.service';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from "@angular/router";
import { NotificationService } from '../../../core/services/Notification/notification.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule,NzButtonModule,NzIconModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'], // Corregido 'styleUrl' a 'styleUrls'
})
export class LoginFormComponent {
  loginForm!: FormGroup;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    public router: Router,
    private notification:NotificationService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });
  }
  submitForm() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.usersService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          this.usersService.setToken(response.access);
          this.router.navigateByUrl("/home");
        },
        error: (error) => {
          console.error('Error durante el login:', error);
        },
      });
    } else {
      this.notification.createNotification("error","Los datos son invalidos");

    }
    
  }
  
}
