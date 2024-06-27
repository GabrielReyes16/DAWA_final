import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGuerreroComponent } from './crear-guerrero.component';

describe('CrearGuerreroComponent', () => {
  let component: CrearGuerreroComponent;
  let fixture: ComponentFixture<CrearGuerreroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearGuerreroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearGuerreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
