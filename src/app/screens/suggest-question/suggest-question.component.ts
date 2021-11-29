import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICard, ICarousel } from 'src/app/models/suggest-question.model';
import { SuggestionQuestionService } from 'src/app/services/suggestion-question.service';

@Component({
  selector: 'app-suggest-question',
  templateUrl: './suggest-question.component.html',
  styleUrls: ['./suggest-question.component.scss'],
})
export class SuggestQuestionComponent implements OnInit {
  private _subscription = new Subscription();

  carousels: Array<ICarousel> = [];
  cards: Array<ICard> = [];
  images: Array<string> = [];

  constructor(private readonly _sqService: SuggestionQuestionService) {}

  ngOnInit(): void {
    this.getCarousels1();
    this.getImages();
  }

  ngOnDestroy() {}

  getCarousels1() {
    this._subscription.add(
      this._sqService.getCardOfCarousel(1).subscribe((response) => {
        this.cards = response.data;
      })
    );
  }

  getImages() {
    this._subscription.add(
      this._sqService.getImages().subscribe((response) => {
        this.images = response.data;
      })
    );
  }
}
