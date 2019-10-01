import { Component, Input } from '@angular/core';
import { ICardList } from '../models/ICardList';
import { ICard } from '../models/ICard';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input() public cardList: ICardList;

  constructor() { }
}
