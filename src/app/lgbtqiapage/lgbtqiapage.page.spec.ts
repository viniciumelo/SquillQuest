import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LGBTQIAPagePage } from './lgbtqiapage.page';

describe('LGBTQIAPagePage', () => {
  let component: LGBTQIAPagePage;
  let fixture: ComponentFixture<LGBTQIAPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LGBTQIAPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
