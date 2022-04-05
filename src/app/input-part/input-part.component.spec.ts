import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPartComponent } from './input-part.component';

describe('InputPartComponent', () => {
  let component: InputPartComponent;
  let fixture: ComponentFixture<InputPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
