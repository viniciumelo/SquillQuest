import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TDAHPage } from './tdah.page';

describe('TDAHPage', () => {
  let component: TDAHPage;
  let fixture: ComponentFixture<TDAHPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TDAHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
