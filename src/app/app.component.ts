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
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-tutorial';

  form = new FormGroup({
    text: new FormControl(''),
  });
  ngOnInit(): void {
    this.form
      .get('text')
      ?.valueChanges.pipe(debounceTime(1000)) // phát ra sự kiện sau mỗi 1s
      // valueChanges: là 1 observable
      .subscribe((data) => {
        console.log(`🚀 ~ data:`, data);
      });
  }
}
