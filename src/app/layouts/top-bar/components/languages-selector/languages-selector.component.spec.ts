import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesSelectorComponent } from './languages-selector.component';

describe('LanguagesSelectorComponent', () => {
  let component: LanguagesSelectorComponent;
  let fixture: ComponentFixture<LanguagesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
