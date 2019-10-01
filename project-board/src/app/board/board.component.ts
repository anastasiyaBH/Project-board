import { Component, Input } from '@angular/core';
import { ICardList } from '../models/ICardList';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() public searchCriterion: string;
  public cardLists: ICardList[];

  constructor() {
    this.cardLists = [
      {
        id: '1',
        name: 'List1',
        cards: [
          {
            id: '11',
            name: 'Title11',
            description: 'description 1'
          },
          {
            id: '12',
            name: 'Title12',
            description: 'description 2',
            isDone: true,
          },
          {
            id: '13',
            name: 'Title13',
            description: 'description 3'
          },
        ],
        isDoneSection: true
      },
      {
        id: '2',
        name: 'List2',
        cards: [
          {
            id: '21',
            name: 'Title21',
            description: 'description 1',
            isDone: true,
          },
          {
            id: '22',
            name: 'Title22',
            description: 'description 2'
          },
          {
            id: '23',
            name: 'Title23',
            description: 'description 3',
            isDone: true,
          },
        ],
        isDoneSection: false
      }
    ];
  }
}
