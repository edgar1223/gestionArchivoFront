import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArchivoComponent } from './lista-archivo.component';

describe('ListaArchivoComponent', () => {
  let component: ListaArchivoComponent;
  let fixture: ComponentFixture<ListaArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaArchivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
