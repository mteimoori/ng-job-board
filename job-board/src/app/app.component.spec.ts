import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ActiveJobsPipe } from './pipe/active.pipe';
import { JobService } from './service/job.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatToolbarModule } from '@angular/material';
import { JobDetailComponent } from './component/job-detail/job-detail.component';
import { JobItemComponent } from './component/job-item/job-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatToolbarModule,
        MatCardModule,
        FlexLayoutModule
      ],
      providers: [
        JobService,
      ],
      declarations: [
        AppComponent,
        ActiveJobsPipe,
        JobItemComponent,
        JobDetailComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Job Board'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Job Board');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Job Board');
  });

});
