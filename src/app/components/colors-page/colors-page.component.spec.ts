import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsPageComponent } from './colors-page.component';

describe('ColorsPageComponent', () => {
  let component: ColorsPageComponent;
  let fixture: ComponentFixture<ColorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
