import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-tutorial';

  listUsers!: Observable<string>;
  user!: string;

  ngOnInit(): void {
    this.listUsers = new Observable((subscriber) => {
      subscriber.next('user 1');
      subscriber.next('user 2');
      subscriber.next('user 3');
    });
    this.listUsers.subscribe((data: string) => {
      console.log(`🚀 ~ data:`, data);
      this.user = data;
      // user 1
      // user 2
      // user 3
    });
  }
}
