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

  removeCard(carouselIndex: number, removedCardId: string) {
    const result = confirm('Bạn có thực sự muốn xoá thẻ này');

    if (result) {
      this._sqService.removeCard(removedCardId).subscribe((e) => {
        if (carouselIndex === 1) {
          this.carousel1 = this.carousel1.filter(
            (card) => card._id !== removedCardId
          );
        } else
          this.carousel2 = this.carousel2.filter(
            (card) => card._id !== removedCardId
          );
      });
    }
  }
}
