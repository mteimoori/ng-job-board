import {JobDto} from '../model/job.dto';
import {Counter, Job} from '../model/job.model';

export class JobSerializer {
  static parse(jobDto: JobDto): Job {
    const {
        id,
        title,
        zip_code,
        city,
        thumbnail,
        attachments,
        counter,
        is_awarded,
        categories,
        state,
        description,
        end_date,
        created_at
    } = jobDto;

    const endDateObj = new Date(end_date);
    const createdAtObj = new Date(created_at);
    const counterObj = new Counter(counter.messages_total, counter.messages_unread);

    return new Job(
        id,
        title,
        zip_code,
        city,
        thumbnail,
        attachments,
        counterObj,
        is_awarded,
        categories,
        state,
        description,
        endDateObj,
        createdAtObj
    );
  }

  static validateSchema(jobFullDto: any): boolean {
    const responseKeys = Object.keys(jobFullDto) as Array<keyof any>;

    return (
      responseKeys.includes('errno') &&
      responseKeys.includes('error') &&
      responseKeys.includes('body')
    );
  }
}
