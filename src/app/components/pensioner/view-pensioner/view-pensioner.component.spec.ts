import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ViewPensionerComponent } from './view-pensioner.component';

describe('ViewPensionerComponent', () => {
  let component: ViewPensionerComponent;
  let fixture: ComponentFixture<ViewPensionerComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPensionerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPensionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
