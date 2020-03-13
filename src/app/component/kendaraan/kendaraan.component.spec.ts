import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendaraanComponent } from './kendaraan.component';

describe('KendaraanComponent', () => {
  let component: KendaraanComponent;
  let fixture: ComponentFixture<KendaraanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendaraanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendaraanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
