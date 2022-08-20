import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchPensionerComponent } from './search-pensioner.component';
import { FormsModule } from '@angular/forms';

describe('SearchPensionerComponent', () => {
  let component: SearchPensionerComponent;
  let fixture: ComponentFixture<SearchPensionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPensionerComponent],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPensionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
