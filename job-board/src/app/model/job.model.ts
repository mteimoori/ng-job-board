export class Job {
  constructor(
    public id: string,
    public title: string,
    public zipCode: string,
    public city: string,
    public thumbnail: string,
    public attachments: string[],
    public counter: Counter,
    public isAwarded: boolean,
    public categories: Category[],
    public state: string,
    public description: string,
    public endDate: Date,
    public createdAt: Date
  ) {}

}

export class Category {
  constructor(public id: string) {}
}

export class Counter {
  constructor(
    public messagesTotal: number,
    public messagesUnread: number) {}
}

export enum State {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}
