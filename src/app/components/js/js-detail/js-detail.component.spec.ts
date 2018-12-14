import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDetailComponent } from './js-detail.component';

describe('JsDetailComponent', () => {
  let component: JsDetailComponent;
  let fixture: ComponentFixture<JsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
