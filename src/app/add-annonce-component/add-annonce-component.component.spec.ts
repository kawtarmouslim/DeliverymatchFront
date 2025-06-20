import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnonceComponentComponent } from './add-annonce-component.component';

describe('AddAnnonceComponentComponent', () => {
  let component: AddAnnonceComponentComponent;
  let fixture: ComponentFixture<AddAnnonceComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAnnonceComponentComponent]
    });
    fixture = TestBed.createComponent(AddAnnonceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
