import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ViewPensionerDetailComponent } from './view-pensioner-detail.component';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('ViewPensionerDetailComponent', () => {
  let component: ViewPensionerDetailComponent;
  let fixture: ComponentFixture<ViewPensionerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPensionerDetailComponent],
      imports: [HttpClientTestingModule, AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPensionerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
