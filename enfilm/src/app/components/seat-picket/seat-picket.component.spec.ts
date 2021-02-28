import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatPicketComponent } from './seat-picket.component';

describe('SeatPicketComponent', () => {
  let component: SeatPicketComponent;
  let fixture: ComponentFixture<SeatPicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatPicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatPicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
