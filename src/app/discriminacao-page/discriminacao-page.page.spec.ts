import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscriminacaoPagePage } from './discriminacao-page.page';

describe('DiscriminacaoPagePage', () => {
  let component: DiscriminacaoPagePage;
  let fixture: ComponentFixture<DiscriminacaoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiscriminacaoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
