import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointHelper } from '../helper/endpoint.helper';
import { JobFullDto } from '../model/job.dto';
import { JobSerializer } from './serializer';
import { Job } from '../model/job.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class JobService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<JobFullDto> {
    return this.http.get<JobFullDto>(EndpointHelper.JobsUrl);
  }

  list(): Observable<Job[]> {
    return this.getList().pipe(map(
      (data: JobFullDto) => data.body.map((item) => JobSerializer.parse(item))
    ));
  }
}
