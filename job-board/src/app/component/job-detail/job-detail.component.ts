import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../model/job.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  @Input() selectedJob: Job;

  constructor() { }

  ngOnInit() {
  }

}
