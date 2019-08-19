import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DblockscreenComponent } from './dblockscreen.component';

describe('DblockscreenComponent', () => {
  let component: DblockscreenComponent;
  let fixture: ComponentFixture<DblockscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DblockscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DblockscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
