import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Observable,
  debounce,
  debounceTime,
  distinct,
  elementAt,
  filter,
  first,
  from,
  fromEvent,
  interval,
  last,
  map,
  of,
  skip,
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
  listNumber: number[] = [1, 2, 3, 4, 5];
  numbers$: Observable<number> = from(this.listNumber);

  ngOnInit(): void {
    this.numbers$.pipe(skip(2)).subscribe((data) => {
      // skip(number): bỏ qua number giá trị đầu tiên
      console.log(data); // 3,4,5
    });
  }
}
