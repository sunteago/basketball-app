export class Student {
  constructor(values) {
    this.student = values.student;
    this.docket = values.docket;
    this.added = new Date().getTime();
    this.key = Math.random();
  }
}

export class Shot {
  constructor(values, checked) {
    this.student = values.student;
    this.position = values.position;
    this.distance = values.distance;
    this.scored = checked;
    this.date = Date.now();
    this.key = Math.random();
  }
}
