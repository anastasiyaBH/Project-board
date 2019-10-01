import { Component, Input} from '@angular/core';
import { ICard } from '../models/ICard';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements  ICard {
  @Input () public id: string;
  @Input () public name: string;
  @Input () public description: string;
  @Input () public dueDate: Date | string;
  @Input () public assignee: IUser;

  constructor() {
 }

}
