import { TestBed } from '@angular/core/testing';
import { JobService } from './job.service';
import { HttpClientModule } from '@angular/common/http';
import { Job } from '../model/job.model';
import { ActiveJobsPipe } from '../pipe/active.pipe';
import { JobSerializer } from './serializer';
import { of } from 'rxjs/index';

describe('Job Service', () => {
  let api: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveJobsPipe],
      imports: [HttpClientModule],
      providers: [
        JobService
      ]
    });
    api = TestBed.get(JobService);
  });

  describe('get all jobs', () => {
    it('should return a Job object with title if any job exists', done => {
      api.list().subscribe(
        (jobs: Job[]) => {
          console.log(jobs);
          expect((jobs.length === 0) || (jobs.length && Object.keys(jobs[0]).includes('title'))).toBe(true);
          done();
        },
        err => {
          console.error(err);
          done();
        }
      );

    });

  });

  describe('serializer', () => {
    it('should have a valid response schema', done => {
      api.getList().subscribe((res) => {
        expect(JobSerializer.validateSchema(res)).toBe(true);
        done();
      });
    });

    it('should detect invalid response schema', done => {
      let obs = of({'errno': 'test', 'error': ''});
      obs.subscribe((res) => {
        expect(JobSerializer.validateSchema(res)).toBe(false);
        done();
      });
    });

  });

});
