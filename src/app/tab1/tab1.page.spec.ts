import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManualPage } from './manual.page';

describe('ManualPage', () => {
  let component: ManualPage;
  let fixture: ComponentFixture<ManualPage>;

<<<<<<< Updated upstream:src/app/tab1/tab1.page.spec.ts
import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
=======
  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManualPage);
>>>>>>> Stashed changes:src/app/manual/manual.page.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
