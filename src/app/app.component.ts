import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Observable,
  Subject,
  Subscription,
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
  constructor(private readonly appService: AppService) {}
  api: string = 'https://dog.ceo/api/breeds/image/random';
  img1: string = '';
  img2: string = '';

  destroy = new Subject();

  ngOnInit(): void {
    this.appService
      .getSingleDog()
      .pipe(takeUntil(this.destroy))
      .subscribe((data: any) => {
        this.img1 = data.message;
      });

    this.appService
      .getSingleDog()
      .pipe(takeUntil(this.destroy))
      .subscribe((data: any) => {
        this.destroy.next(true);
        this.destroy.complete();
        this.img2 = data.message;
      });
  }

  // takeUntil(Subject): unsubscribe khi Subject phát ra giá trị hoặc hoàn thành

  unsub() {
    // this.destroy.next(true); // phát ra giá trị
    // this.destroy.complete(); // hoàn thành
  }
}
