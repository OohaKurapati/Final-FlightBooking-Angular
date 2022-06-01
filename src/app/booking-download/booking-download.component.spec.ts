import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDownloadComponent } from './booking-download.component';

describe('BookingDownloadComponent', () => {
  let component: BookingDownloadComponent;
  let fixture: ComponentFixture<BookingDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
