export interface IContainerCard {
  image: string;
  carousels: Array<ICarousel>;
}

export interface ICarousel {
  cards: Array<ICard>;
  content: string;
}

export interface ICard {
  image: string;
  topics: {
    questions: Array<IQuestion>;
  }[];
}

export interface IQuestion {
  title: string;
  answers?: Array<any>;
}
