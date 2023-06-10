import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SexismoPagePage } from './sexismo-page.page';

describe('SexismoPagePage', () => {
  let component: SexismoPagePage;
  let fixture: ComponentFixture<SexismoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SexismoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
