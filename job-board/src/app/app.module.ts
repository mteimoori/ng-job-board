import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobService } from './service/job.service';
import { HttpClientModule } from '@angular/common/http';
import { ActiveJobsPipe } from './pipe/active.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JobItemComponent } from './component/job-item/job-item.component';
import { JobDetailComponent } from './component/job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveJobsPipe,
    JobItemComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
