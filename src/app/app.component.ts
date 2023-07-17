import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Observable,
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

  subscription = new Subscription();
  ngOnInit(): void {
    this.subscription.add(
      this.appService.getSingleDog().subscribe((data: any) => {
        console.log('data1', data);
        this.img1 = data.message;
      })
    );
    this.subscription.add(
      this.appService.getSingleDog().subscribe((data: any) => {
        console.log('data2', data);
        this.img2 = data.message;
      })
    );
  }

  unsub() {
    this.subscription.unsubscribe();
  }
}
