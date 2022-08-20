import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListPensionerDetailComponent } from './list-pensioner-detail.component';

describe('ListPensionerDetailComponent', () => {
  let component: ListPensionerDetailComponent;
  let fixture: ComponentFixture<ListPensionerDetailComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPensionerDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListPensionerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
