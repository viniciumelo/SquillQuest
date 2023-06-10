import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolAccountPage } from './school-account.page';

describe('SchoolAccountPage', () => {
  let component: SchoolAccountPage;
  let fixture: ComponentFixture<SchoolAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SchoolAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
