import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';
import { NgxSpinnerService } from 'ngx-spinner';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  incomingData: any = [];
  currentPage: number = 1;
  questions: any;
  pageSize = 10;
  total = 0;
  uploaderInput = '';

  private _subscription = new Subscription();

  @ViewChild('uploader', { static: false }) myInputVariable: ElementRef;

  constructor(
    private _questionService: QuestionService,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._spinner.show();
    this.getQuestions();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getQuestions() {
    this._subscription.add(
      this._questionService.getQuestions().subscribe((questions) => {
        this._spinner.hide();
        const { items, total } = questions.data;
        this.questions = items;
        this.total = total;
      })
    );
  }

  changePage(page: number) {
    const reqPage = page - 1;
    this._subscription.add(
      this._questionService.getQuestions(reqPage).subscribe((questions) => {
        const { items } = questions.data;
        this.questions = items;
      })
    );

    this.currentPage = page;
  }

  onFileChange(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the sheet what contain Questions */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws) as any; // to get 2d array pass 2nd parameter as object {header: 1}

      this.incomingData = data.map((row) => {
        return {
          ...row,
          status: 1,
          answers: [{ content: row.answers?.toString() }],
        };
      });

      if (this.incomingData) {
        const cfBox = confirm(
          'Bạn có muốn tạo mới các câu hỏi bằng cách nhập file Excel này?'
        );

        if (cfBox) {
          this.questions = [];
          this.myInputVariable.nativeElement.value = '';

          this._subscription.add(
            this._questionService
              .createQuestion(this.incomingData, true)
              .subscribe(
                (res) => {
                  alert('Questions were created');
                  this.questions = this.incomingData;
                },
                (err) => console.log('aaaaaa', err)
              )
          );
        }
      }
    };
  }

  uploadXLSX() {}
}
