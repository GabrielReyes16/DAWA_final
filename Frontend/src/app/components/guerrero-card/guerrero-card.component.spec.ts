import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerreroCardComponent } from './guerrero-card.component';

describe('GuerreroCardComponent', () => {
  let component: GuerreroCardComponent;
  let fixture: ComponentFixture<GuerreroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuerreroCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuerreroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
