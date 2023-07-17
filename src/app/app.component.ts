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
  listUsers: string[] = ['tuan', 'nam', 'quan', 'cuong'];
  users$: Observable<string> = from(this.listUsers);
  ngOnInit(): void {
    this.users$.pipe(elementAt(3)).subscribe((data) => {
      // elementAt(index): lấy ra phần từ ở vị trí index
      console.log(data); // cuong
    });

    this.users$.pipe(elementAt(6)).subscribe((data) => {
      console.log(data); // ERROR
    });
  }
}
