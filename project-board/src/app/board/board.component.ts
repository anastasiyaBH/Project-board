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
            description: 'description 1',
            dueDate: 'September 30, 2019 00:00:00',
            assignee:
            {
              id: '999',
              firstName: 'John',
              lastName: 'Doe'
            }
          },
          {
            id: '12',
            name: 'Title12',
            description: 'description 2',
            isDone: true,
            dueDate: 'September 29, 2019 00:00:00'
          },
          {
            id: '13',
            name: 'Title13',
            description: 'description 3',
            assignee:
            {
              id: '999',
              firstName: 'John',
              lastName: 'Doe'
            }
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
            assignee:
            {
              id: '999',
              firstName: 'John',
              lastName: 'Doe'
            }
          },
          {
            id: '22',
            name: 'Title22',
            description: 'description 2',
            dueDate: 'September 28, 2019 00:00:00'
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
