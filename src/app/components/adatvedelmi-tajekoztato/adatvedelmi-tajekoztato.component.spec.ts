import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatvedelmiTajekoztatoComponent } from './adatvedelmi-tajekoztato.component';

describe('AdatvedelmiTajekoztatoComponent', () => {
  let component: AdatvedelmiTajekoztatoComponent;
  let fixture: ComponentFixture<AdatvedelmiTajekoztatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdatvedelmiTajekoztatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdatvedelmiTajekoztatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
