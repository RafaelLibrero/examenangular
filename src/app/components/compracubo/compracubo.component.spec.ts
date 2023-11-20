import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompracuboComponent } from './compracubo.component';

describe('CompracuboComponent', () => {
  let component: CompracuboComponent;
  let fixture: ComponentFixture<CompracuboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompracuboComponent]
    });
    fixture = TestBed.createComponent(CompracuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
