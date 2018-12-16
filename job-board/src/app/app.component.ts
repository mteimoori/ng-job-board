import { Component, OnInit } from '@angular/core';
import { JobService } from './service/job.service';
import { Job } from './model/job.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  jobs: Job[];
  public title = 'Job Board';
  public selectedJob;
  public detailEnabled: boolean = false;

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.jobService.list().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
      this.selectedJob = this.jobs[0];
    });

  }

  selectJob(job: Job) {
    this.detailEnabled = true;
    this.selectedJob = job;
  }
}
