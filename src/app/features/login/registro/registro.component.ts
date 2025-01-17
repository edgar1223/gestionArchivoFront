import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';

import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../core/services/Users/users.service';
import { NotificationService } from '../../../core/services/Notification/notification.service';
@Component({
  selector: 'app-registro',
  imports: [
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    ReactiveFormsModule,

  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  @Output() registerSuccess = new EventEmitter<void>();  
  userForm: FormGroup;

  constructor(private fb: FormBuilder,
    private usersService: UsersService,
    private notification:NotificationService
  ) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.usersService.register(this.userForm.value).subscribe(repuesta=>{
        console.log(repuesta)
        this.notification.createNotification("success","Regitro exitoso, Porfavor logueate");

        this.registerSuccess.emit();
      })
    }else {
      this.notification.createNotification("error","Los datos son invalidos");

    }
  }
}
