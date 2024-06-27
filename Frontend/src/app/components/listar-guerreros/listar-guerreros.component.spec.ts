import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGuerrerosComponent } from './listar-guerreros.component';

describe('ListarGuerrerosComponent', () => {
  let component: ListarGuerrerosComponent;
  let fixture: ComponentFixture<ListarGuerrerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarGuerrerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarGuerrerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
