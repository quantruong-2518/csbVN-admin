import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SuggestionQuestionService } from 'src/app/services/suggestion-question.service';

@Component({
  selector: 'app-suggest-question',
  templateUrl: './suggest-question.component.html',
  styleUrls: ['./suggest-question.component.scss'],
})
export class SuggestQuestionComponent implements OnInit {
  carousel1 = [];
  carousel2 = [];
  constructor(private _sqService: SuggestionQuestionService) {}
  ngOnInit() {
    this.getSugByCarousel();
  }

  getSugByCarousel() {
    this._sqService
      .getCardOfCarousel(1)
      .subscribe((crs) => (this.carousel1 = crs.data));
    this._sqService
      .getCardOfCarousel(2)
      .subscribe((crs) => (this.carousel2 = crs.data));
  }
}
