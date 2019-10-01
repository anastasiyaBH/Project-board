import { Pipe, PipeTransform } from '@angular/core';
import { ICardList } from '../models/ICardList';
import { ICard } from '../models/ICard';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cards: ICard[], searchCriterion: string): ICard[] {
    const criterion = new RegExp(searchCriterion, 'i');
    return (searchCriterion)
    ? cards.filter(card => criterion.test(card.name))
    : cards;
  }

}
