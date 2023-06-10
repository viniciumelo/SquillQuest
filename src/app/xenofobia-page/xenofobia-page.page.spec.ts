import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XenofobiaPagePage } from './xenofobia-page.page';

describe('XenofobiaPagePage', () => {
  let component: XenofobiaPagePage;
  let fixture: ComponentFixture<XenofobiaPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XenofobiaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
