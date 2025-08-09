import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingDays } from './upcoming-days';

describe('UpcomingDays', () => {
  let component: UpcomingDays;
  let fixture: ComponentFixture<UpcomingDays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingDays]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingDays);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
