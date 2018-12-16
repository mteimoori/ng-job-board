import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '../../model/job.model';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {
  @Input() job: Job;
  @Output() jobEvent = new EventEmitter<Job>();
  constructor() { }

  ngOnInit() {
  }

  onClickJobItem(event) {
    this.jobEvent.emit(event);
  }
}
