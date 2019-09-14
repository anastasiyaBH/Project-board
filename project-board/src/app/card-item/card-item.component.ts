import { Component, OnInit } from '@angular/core';
import { ICard } from '../models/ICard';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit, ICard {
  public id: string;
  public name: string;
  public description: string;
  public dueDate: Date | string;
  public assignee: IUser;

  constructor() {
 }

  ngOnInit() {
  }

}
