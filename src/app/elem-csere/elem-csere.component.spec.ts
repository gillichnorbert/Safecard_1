import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemCsereComponent } from './elem-csere.component';

describe('ElemCsereComponent', () => {
  let component: ElemCsereComponent;
  let fixture: ComponentFixture<ElemCsereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElemCsereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElemCsereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
