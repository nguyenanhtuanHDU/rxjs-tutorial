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

  listNumbers: number[] = [1, 2, 3, 4, 5];
  listNumbers$: Observable<number> = from(this.listNumbers);

  ngOnInit(): void {
    this.listNumbers$.pipe(first()).subscribe((data) => {
      // first(): lấy ra giá trị đầu tiên khi ko truyền vào đối số
      console.log(data); // 1
    });

    this.listNumbers$.pipe(first((data) => data > 2)).subscribe((data) => {
      // first(true condition) => lấy giá trị đầu tiên thỏa mãn điều kiện
      console.log(data); // 3
    });
  }
}
