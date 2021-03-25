import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentResultComponent } from './rent-result.component';

describe('RentResultComponent', () => {
  let component: RentResultComponent;
  let fixture: ComponentFixture<RentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
