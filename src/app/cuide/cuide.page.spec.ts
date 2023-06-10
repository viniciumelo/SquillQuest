import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuidePage } from './cuide.page';

describe('CuidePage', () => {
  let component: CuidePage;
  let fixture: ComponentFixture<CuidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
