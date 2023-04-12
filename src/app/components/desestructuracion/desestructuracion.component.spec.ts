import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesestructuracionComponent } from './desestructuracion.component';

describe('DesestructuracionComponent', () => {
  let component: DesestructuracionComponent;
  let fixture: ComponentFixture<DesestructuracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesestructuracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesestructuracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
