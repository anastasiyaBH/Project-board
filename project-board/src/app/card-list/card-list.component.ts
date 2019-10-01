import { Component, Input } from '@angular/core';
import { ICardList } from '../models/ICardList';
import { ICard } from '../models/ICard';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements ICardList {

  @Input() public id: string;
  @Input() public name: string;
  @Input() public cards: ICard[];

  constructor() { }
}
