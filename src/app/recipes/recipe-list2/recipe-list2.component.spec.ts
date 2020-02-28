import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeList2Component } from './recipe-list2.component';

describe('RecipeList2Component', () => {
  let component: RecipeList2Component;
  let fixture: ComponentFixture<RecipeList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
