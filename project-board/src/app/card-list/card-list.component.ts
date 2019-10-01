import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICardList } from '../models/ICardList';
import { ICard } from '../models/ICard';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input() public cardList: ICardList;
  @Input() searchCriterion: string;
  @Output() removeCard = new EventEmitter<ICard>();

  constructor() {}

  onRemoveCard(card: ICard) {
    let index = this.cardList.cards.indexOf(card);
    console.log(index);
    this.cardList.cards.splice(index,1);
  }
}
