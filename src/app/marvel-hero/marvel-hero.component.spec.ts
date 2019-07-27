import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHeroComponent } from './marvel-hero.component';

describe('MarvelHeroComponent', () => {
  let component: MarvelHeroComponent;
  let fixture: ComponentFixture<MarvelHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
