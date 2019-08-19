import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TigerbookComponent } from './tigerbook.component';

describe('TigerbookComponent', () => {
  let component: TigerbookComponent;
  let fixture: ComponentFixture<TigerbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TigerbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TigerbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
