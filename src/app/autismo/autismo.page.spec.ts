import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutismoPage } from './autismo.page';

describe('AutismoPage', () => {
  let component: AutismoPage;
  let fixture: ComponentFixture<AutismoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutismoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
