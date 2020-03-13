import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarComponent } from './keluar.component';

describe('KeluarComponent', () => {
  let component: KeluarComponent;
  let fixture: ComponentFixture<KeluarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeluarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
