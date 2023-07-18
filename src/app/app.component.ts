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
  distinctUntilChanged,
  distinctUntilKeyChanged,
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
  numbers$: Observable<number> = from([1, 2, 3, 2]);

  users$ = from([
    {
      name: 'user1',
      age: 12,
    },
    {
      name: 'user2',
      age: 12,
    },
    {
      name: 'user3',
      age: 12,
    },
    {
      name: 'user2',
      age: 12,
    },
  ]);

  ngOnInit(): void {
    this.numbers$.pipe(distinctUntilChanged()).subscribe((data) => {
      // distinctUntilChanged: nếu có giá trị mới thì so sánh vs giá trị trc đó chứ không so sánh vs tất cả các giá trị như distinct
      console.log(data);
    });

    this.users$.pipe(distinctUntilKeyChanged('name')).subscribe((data) => {
      console.log(data);
      // distinctUntilKeyChanged(key): giống vs distinctUntilChanged nhưng khác chỗ là so sánh key
    });
  }
}
