import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsproductComponent } from './kidsproduct.component';

describe('KidsproductComponent', () => {
  let component: KidsproductComponent;
  let fixture: ComponentFixture<KidsproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
