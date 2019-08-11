import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSocialMediaComponent } from './top-social-media.component';

describe('TopSocialMediaComponent', () => {
  let component: TopSocialMediaComponent;
  let fixture: ComponentFixture<TopSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
