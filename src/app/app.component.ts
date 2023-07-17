import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Observable,
  debounce,
  debounceTime,
  elementAt,
  filter,
  first,
  from,
  fromEvent,
  interval,
  last,
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
  listNumbers: number[] = [123, 55, 78, 44, 90, 2];
  numbers$: Observable<number> = from(this.listNumbers);

  ngOnInit(): void {
    this.numbers$.pipe(filter((value) => value > 60)).subscribe((data) => {
      console.log(data); // 123, 78, 90
    });

    this.numbers$
      .pipe(filter((value, index) => value > 50 && index % 2 === 0))
      // hỗ trợ index
      .subscribe((data) => {
        console.log(data); // 123, 78, 90
      });
  }
}
