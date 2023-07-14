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
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-tutorial';

  listNumbers: number[] = [1, 2, 3, 4, 5, 6, 1, 2, 3];
  nunbers$ = from(this.listNumbers);

  ngOnInit(): void {
    this.nunbers$.pipe(takeWhile((data) => data < 5)).subscribe((data) => {
      // takeWhile: lấy giá trị thỏa mãn điều kiện, nếu không đúng lập tức dừng
      console.log(data);
      // 1
      // 2
      // 3
      // 4
    });
  }
}
