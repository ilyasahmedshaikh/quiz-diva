import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizThankyouComponent } from './quiz-thankyou.component';

describe('QuizThankyouComponent', () => {
  let component: QuizThankyouComponent;
  let fixture: ComponentFixture<QuizThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizThankyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
