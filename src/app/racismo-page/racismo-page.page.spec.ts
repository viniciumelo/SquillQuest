import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacismoPagePage } from './racismo-page.page';

describe('RacismoPagePage', () => {
  let component: RacismoPagePage;
  let fixture: ComponentFixture<RacismoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RacismoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
