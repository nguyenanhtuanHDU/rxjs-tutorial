import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Observable,
  Subject,
  Subscription,
  concat,
  count,
  debounce,
  debounceTime,
  distinct,
  elementAt,
  filter,
  first,
  forkJoin,
  from,
  fromEvent,
  interval,
  last,
  map,
  max,
  merge,
  of,
  skip,
  take,
  takeLast,
  takeUntil,
  takeWhile,
} from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  arr1: Observable<number> = from([1, 1]);
  arr2: Observable<number> = from([2, 2]);
  arr3: Observable<number> = from([3, 3]);

  ngOnInit(): void {
    forkJoin(this.arr1, this.arr2, this.arr3).subscribe((data) => {
      console.log(data); // [1,1,2,2,3,3]
    });
    // forkJoin(Observable 1,2,3...): gộp các giá trị lại và trả về 1 mảng chứa các giá trị
  }
}
