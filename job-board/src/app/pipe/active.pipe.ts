import { Pipe, PipeTransform } from '@angular/core';
import { Job, State } from '../model/job.model';


@Pipe({
  name: 'activeJobs'
})
export class ActiveJobsPipe implements PipeTransform {
    transform(allJobs: Job[]) {
        if (!allJobs) { return []; }
        return allJobs.filter(job => job.state === State.ACTIVE);
    }
}
