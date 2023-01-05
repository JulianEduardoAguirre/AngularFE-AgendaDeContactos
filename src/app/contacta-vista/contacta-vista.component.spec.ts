import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaVistaComponent } from './contacta-vista.component';

describe('ContactaVistaComponent', () => {
  let component: ContactaVistaComponent;
  let fixture: ComponentFixture<ContactaVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactaVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
