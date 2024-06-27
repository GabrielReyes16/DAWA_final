import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransfComponent } from './listar-transf.component';

describe('ListarTransfComponent', () => {
  let component: ListarTransfComponent;
  let fixture: ComponentFixture<ListarTransfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTransfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTransfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
