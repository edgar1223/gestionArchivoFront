import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoCompartidoComponent } from './archivo-compartido.component';

describe('ArchivoCompartidoComponent', () => {
  let component: ArchivoCompartidoComponent;
  let fixture: ComponentFixture<ArchivoCompartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivoCompartidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivoCompartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
