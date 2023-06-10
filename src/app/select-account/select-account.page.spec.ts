import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectAccountPage } from './select-account.page';

describe('SelectAccountPage', () => {
  let component: SelectAccountPage;
  let fixture: ComponentFixture<SelectAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
