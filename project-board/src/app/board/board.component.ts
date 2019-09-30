import { Component, OnChanges, Input } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnChanges {
  @Input() public searchCriterion: string;
  public cardList: CardListComponent[];

  constructor() { }

  ngOnChanges() {
  }

}
