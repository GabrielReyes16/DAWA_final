import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTransfComponent } from './crear-transf.component';

describe('CrearTransfComponent', () => {
  let component: CrearTransfComponent;
  let fixture: ComponentFixture<CrearTransfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearTransfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTransfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
