export class Affirmation {
  id?: string;
  message: string;
  displayDate?: Date;
  random: number;

  constructor(mesage: string, displayDate?: Date, id?: string) {
    this.message = mesage;
    this.displayDate = displayDate;
    this.random = Math.random();
    this.id = id;
  }
}

export type TodaysAffirmation = {
  date: Date,
  affirmation: Affirmation | undefined,
}

export const affirmationMap = (data: any, id: string) => new Affirmation(data.message, data.displayDate, id);