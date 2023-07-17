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
  listNumbers: number[] = [1, 2, 3, 1, 2, 3, 4];
  numbers$: Observable<number> = from(this.listNumbers);

  listUsers: any[] = [
    {
      username: 'user1',
      age: 20,
    },
    {
      username: 'user2',
      age: 20,
    },
    {
      username: 'user3',
      age: 21,
    },
    {
      username: 'user4',
      age: 22,
    },
  ];

  users$: Observable<any> = from(this.listUsers);

  ngOnInit(): void {
    this.numbers$.pipe(distinct()).subscribe((data) => {
      // distinct(): loại bỏ giá trị trùng lặp
      console.log(data); // 1,2,3,4
    });

    this.users$.pipe(distinct((value) => value.age)).subscribe((data) => {
      console.log(data);
      //     {
      //        username: 'user1',
      //        age: 20,
      //     },
      //     {
      //        username: 'user3',
      //        age: 21,
      //     },
      //     {
      //        username: 'user4',
      //        age: 22,
      //     },
    });
  }
}
