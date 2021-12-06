import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Subject, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import {
  ICarousel,
  ICard,
  IQuestion,
} from 'src/app/models/suggest-question.model';
import { QuestionService } from 'src/app/services/question.service';
import { SuggestionQuestionService } from 'src/app/services/suggestion-question.service';

@Component({
  selector: 'app-modify-suggestion',
  templateUrl: './modify-suggestion.component.html',
  styleUrls: ['./modify-suggestion.component.scss'],
})
export class ModifySuggestionComponent implements OnInit {
  private _subscription = new Subscription();
  keyChanged$: Subject<string> = new Subject<string>();

  currentTab = 'image';
  currentTopic = 0;
  questionKey = '';

  carousels: Array<ICarousel> = [];
  cards: Array<ICard> = [];
  images: Array<string> = [];

  matchedQuestions: Array<IQuestion> = [];
  focussingQuestions: Array<IQuestion> = [];

  card: ICard = {
    image: '',
    type: 1,
    topics: [
      {
        content: '',
        questions: [],
      },
    ],
    _id: '',
  };
  cardShadow: ICard;

  isUpdating = false;

  constructor(
    private readonly _sqService: SuggestionQuestionService,
    private readonly _qService: QuestionService,
    private readonly _route: Router,
    private readonly _aRoute: ActivatedRoute
  ) {
    this._subscription.add(
      this.keyChanged$
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          mergeMap((value) => this._qService.searchQuestion(value))
        )
        .subscribe((response: { data: Array<IQuestion> }) => {
          this.matchedQuestions = response.data;
        })
    );
  }

  ngOnInit(): void {
    this.getCurrentCard();
    this.getCarousels1();
    this.getImages();
  }

  ngOnDestroy() {}

  getCurrentCard() {
    this._subscription.add(
      this._aRoute.params
        .pipe(
          switchMap((currentURL) => {
            return Object.keys(currentURL).length === 0
              ? of(null)
              : this._sqService.getCardById(currentURL.cardId);
          })
        )
        .subscribe((result) => {
          if (result) {
            this.isUpdating = true;

            this.card = result.data;
            this.cardShadow = JSON.parse(JSON.stringify(this.card));
          }
        })
    );
  }

  getCarousels1() {
    this._subscription.add(
      this._sqService.getCardOfCarousel(1).subscribe((response) => {
        this.cards = response.data;
      })
    );
  }

  getCardContent(cardIndex: number): string {
    return this.card.topics[cardIndex].content;
  }

  getImages() {
    this._subscription.add(
      this._sqService.getImages().subscribe((response) => {
        this.images = response.data;
      })
    );
  }

  selectCardImage(src: string) {
    this.card.image = src;
    this.currentTab = 'topic';
  }

  isSelectedImage(img: string): string {
    const sameImage = this.card.image.includes(img);
    return sameImage ? 'selected' : null;
  }

  searchQuestion(key: string) {
    if (key === '') {
      this.matchedQuestions = [];
    } else this.keyChanged$.next(key);
  }

  resetSearchBar() {
    this.questionKey = '';
    this.matchedQuestions = [];
    this.focussingQuestions = [];
  }

  setCurTopic(index: number) {
    this.resetSearchBar();
    this.currentTopic = index;
  }

  getQuesByTopicIndex(index: number) {
    return this.card.topics[index]?.questions.length;
  }

  selectQuestion(question: IQuestion) {
    this.focussingQuestions.push(question);
  }

  addQuestionToTopic(curTopic: number) {
    this.card.topics[curTopic].questions = this.focussingQuestions.map(
      (ques) => ques._id
    );
    this.resetSearchBar();
  }

  setTopicQuantity(topicQuantity: number) {
    if (!this.isUpdating) {
      this.card.topics = [];
      let topics = [];

      for (let index = 0; index < topicQuantity; index++) {
        topics.push({
          content: '',
          questions: [],
        });
      }

      this.card.topics = topics;
    } else {
      this.card = this.cardShadow;
      this.card = {
        ...this.card,
        topics: this.card.topics.slice(0, topicQuantity),
      };
    }
  }

  submitCard() {
    if (this.isUpdating) {
      this._subscription.add(
        this._sqService.updateCard(this.card).subscribe((card) => {
          this._route.navigate(['suggest-question']);
        })
      );
    } else {
      delete this.card._id;
      this._subscription.add(
        this._sqService.createCard(this.card).subscribe((card) => {
          this._route.navigate(['suggest-question']);
        })
      );
    }
  }

  setContent(value: string, index: number) {
    this.card.topics[index].content = value;
  }
}
