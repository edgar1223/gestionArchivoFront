import { Component, OnInit } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router'; // Asegúrate de incluir esto

@Component({
  selector: 'app-menu',
  imports: [NzMenuModule , NzButtonModule, NzIconModule , NzToolTipModule,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  isMobileScreen = false;
  isBoton = false;
  ngOnInit(): void {
    this.checkScreenSize();

  }
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  checkScreenSize(): void {
    this.isMobileScreen = window.innerWidth <= 768;
    this.isBoton = window.innerWidth <= 1369;

    if (this.isBoton) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }
}
