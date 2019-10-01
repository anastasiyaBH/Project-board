import { ICard } from './ICard';

export interface ICardList {
  id: string;
  name: string;
  cards: ICard[];
  isDoneSection: boolean;
}
