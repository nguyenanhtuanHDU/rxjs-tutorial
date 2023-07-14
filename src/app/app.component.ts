import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Observable,
  debounce,
  debounceTime,
  filter,
  from,
  fromEvent,
  interval,
  map,
  of,
  take,
  takeLast,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-tutorial';

  listNumbers: number[] = [1, 2, 3, 4];

  numbers$ = from(this.listNumbers);

  ngOnInit(): void {
    this.numbers$.pipe(takeLast(2)).subscribe((data) => {
      // takeLast(2): lấy ra 2 giá trị cuối cùng
      console.log(`🚀 ~ data:`, data);
      // 3
      // 4
    });
  }
}
