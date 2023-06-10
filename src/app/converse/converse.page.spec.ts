import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversePage } from './converse.page';

describe('ConversePage', () => {
  let component: ConversePage;
  let fixture: ComponentFixture<ConversePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConversePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
