import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRazasComponent } from './listar-razas.component';

describe('ListarRazasComponent', () => {
  let component: ListarRazasComponent;
  let fixture: ComponentFixture<ListarRazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarRazasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
