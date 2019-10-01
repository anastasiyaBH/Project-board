import { IUser } from './IUser';

export interface ICard {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: IUser;
  isDone?: boolean;
}
