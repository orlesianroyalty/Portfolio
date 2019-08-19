import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DracarysComponent } from './dracarys.component';

describe('DracarysComponent', () => {
  let component: DracarysComponent;
  let fixture: ComponentFixture<DracarysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DracarysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DracarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
