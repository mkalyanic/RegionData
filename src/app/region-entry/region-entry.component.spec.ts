import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionEntryComponent } from './region-entry.component';

describe('RegionEntryComponent', () => {
  let component: RegionEntryComponent;
  let fixture: ComponentFixture<RegionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
