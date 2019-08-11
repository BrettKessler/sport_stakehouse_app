import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsCardsComponent } from './sports-cards.component';

describe('SportsCardsComponent', () => {
  let component: SportsCardsComponent;
  let fixture: ComponentFixture<SportsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
