import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheForestComponent } from './the-forest.component';

describe('TheForestComponent', () => {
  let component: TheForestComponent;
  let fixture: ComponentFixture<TheForestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheForestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
