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

  listUsers: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];
  users = from(this.listUsers);
  ngOnInit(): void {
    this.users.pipe(take(3)).subscribe((data) => {
      // take(3): lấy 3 giá trị đầu tiên
      console.log(`🚀 ~ data:`, data);
      // user1
      // user2
      // user3
    });
  }
}
