import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoShowComponent } from './nuevo-show.component';

describe('NuevoShowComponent', () => {
  let component: NuevoShowComponent;
  let fixture: ComponentFixture<NuevoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
