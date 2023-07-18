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
  from,
  fromEvent,
  interval,
  last,
  map,
  max,
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
  arr1: Observable<number> = from([1, 2]);
  arr2: Observable<number> = from([3, 4]);
  arr3: Observable<number> = from([5, 6]);

  ngOnInit(): void {
    concat(this.arr1, this.arr2, this.arr3).subscribe((data) => {
      console.log(data);
    });

    // concat(Observable 1,2,...): các Observable sẽ chạy lần lượt
    // Observable thứ 2 chỉ chạy khi Observable 1 complete
  }
}
