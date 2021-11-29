import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BadWordService } from 'src/app/services/badword.service';

@Component({
  selector: 'app-bad-words',
  templateUrl: './bad-words.component.html',
  styleUrls: ['./bad-words.component.scss'],
})
export class BadWordsComponent implements OnInit {
  badWords = [];
  currentBadWord = '';

  private _subscription = new Subscription();

  constructor(private _service: BadWordService) {}

  ngOnInit(): void {
    this.getSensitiveWords();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getSensitiveWords() {
    this._subscription.add(
      this._service.getSensitiveWords().subscribe((e) => {
        this.badWords = e.data.items;
      })
    );
  }

  removeBadWord(wordId: string) {
    this._subscription.add(
      this._service.removeSensitiveWord(wordId).subscribe((e) => {
        this.badWords = this.badWords.filter((word) => word._id !== wordId);
      })
    );
  }

  blockBadWord(badWord: string) {
    this.currentBadWord = '';

    if (badWord) {
      this._subscription.add(
        this._service
          .createSensitiveWord({ title: badWord })
          .subscribe((newBadWord) => {
            this.badWords = [newBadWord.data, ...this.badWords];
          })
      );
    }
  }
}
