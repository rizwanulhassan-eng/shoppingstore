import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensproductComponent } from './mensproduct.component';

describe('MensproductComponent', () => {
  let component: MensproductComponent;
  let fixture: ComponentFixture<MensproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
