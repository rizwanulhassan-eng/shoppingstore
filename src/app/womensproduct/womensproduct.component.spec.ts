import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensproductComponent } from './womensproduct.component';

describe('WomensproductComponent', () => {
  let component: WomensproductComponent;
  let fixture: ComponentFixture<WomensproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
