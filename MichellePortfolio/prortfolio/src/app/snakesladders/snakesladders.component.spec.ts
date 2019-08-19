import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakesladdersComponent } from './snakesladders.component';

describe('SnakesladdersComponent', () => {
  let component: SnakesladdersComponent;
  let fixture: ComponentFixture<SnakesladdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakesladdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakesladdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
