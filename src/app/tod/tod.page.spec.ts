import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TODPage } from './tod.page';

describe('TODPage', () => {
  let component: TODPage;
  let fixture: ComponentFixture<TODPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TODPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
