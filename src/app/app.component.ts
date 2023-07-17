import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Observable,
  debounce,
  debounceTime,
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
  title = 'rxjs-tutorial';
  listUsers: string[] = ['tuan', 'nam', 'quan'];
  listNumbers: number[] = [1, 2, 3, 4, 5];
  users$: Observable<string> = from(this.listUsers);
  numbers$: Observable<number> = from(this.listNumbers);
  ngOnInit(): void {
    this.users$.pipe(last()).subscribe((data) => {
      // last(): lấy ra phần tử cuối cùng
      console.log(data); // quan
    });

    this.numbers$.pipe(last((data) => data < 4)).subscribe((data) => {
      // last(điều kiện): lấy ra phần tử cuối thỏa mãn điều kiện
      console.log(data); // 3
    });
  }
}
