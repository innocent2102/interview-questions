import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCreateComponent } from './js-create.component';

describe('JsCreateComponent', () => {
  let component: JsCreateComponent;
  let fixture: ComponentFixture<JsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
