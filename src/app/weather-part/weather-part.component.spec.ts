import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPartComponent } from './weather-part.component';

describe('WeatherPartComponent', () => {
  let component: WeatherPartComponent;
  let fixture: ComponentFixture<WeatherPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
