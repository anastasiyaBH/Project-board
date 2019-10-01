import { Component, Input, Output,EventEmitter} from '@angular/core';
import { ICard } from '../models/ICard';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input () public card: ICard;
  @Output() removeCard = new EventEmitter<ICard>();
  public isExpanded: boolean;

  constructor() {
    this.isExpanded = false;
  }

  onRemoveCard() {
    console.log("button remove");
    this.removeCard.emit(this.card);
  }

  expandCard() {
    this.isExpanded = !this.isExpanded;
  }

}
