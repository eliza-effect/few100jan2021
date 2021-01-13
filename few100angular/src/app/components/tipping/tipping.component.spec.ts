import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippingComponent } from './tipping.component';

describe('TippingComponent', () => {
  let component: TippingComponent;
  let fixture: ComponentFixture<TippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
