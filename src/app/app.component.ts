import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Observable,
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

  listUsers: any[] = [
    {
      username: 'user1',
      age: 20,
    },
    {
      username: 'user2',
      age: 21,
    },
    {
      username: 'user3',
      age: 22,
    },
  ];

  users$: Observable<any> = from(this.listUsers);

  ngOnInit(): void {
    this.numbers$.pipe(max()).subscribe((data) => {
      // max(): phần tử lớn nhất
      console.log(data); // 5
    });

    this.users$.pipe(max((a, b) => a.age - b.age)).subscribe((data) => {
      console.log(data);
      // {
      //   username: 'user3',
      //   age: 22,
      // },
    });
  }
}
