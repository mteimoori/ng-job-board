import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobService } from './service/job.service';
import { HttpClientModule } from '@angular/common/http';
import { ActiveJobsPipe } from './pipe/active.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ActiveJobsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
