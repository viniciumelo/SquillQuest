import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InclusaoPagePage } from './inclusao-page.page';

describe('InclusaoPagePage', () => {
  let component: InclusaoPagePage;
  let fixture: ComponentFixture<InclusaoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InclusaoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
