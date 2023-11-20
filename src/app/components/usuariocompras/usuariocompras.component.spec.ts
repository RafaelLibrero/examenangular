import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariocomprasComponent } from './usuariocompras.component';

describe('UsuariocomprasComponent', () => {
  let component: UsuariocomprasComponent;
  let fixture: ComponentFixture<UsuariocomprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariocomprasComponent]
    });
    fixture = TestBed.createComponent(UsuariocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
