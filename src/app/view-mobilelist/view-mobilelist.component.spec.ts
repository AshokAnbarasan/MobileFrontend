import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMobilelistComponent } from './view-mobilelist.component';

describe('ViewMobilelistComponent', () => {
  let component: ViewMobilelistComponent;
  let fixture: ComponentFixture<ViewMobilelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMobilelistComponent]
    });
    fixture = TestBed.createComponent(ViewMobilelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
