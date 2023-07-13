import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-tutorial';
  listUsers: string[] = ['user1', 'user2', 'user3'];

  users: Observable<string[]> = of(this.listUsers);

  users$: Observable<any[]> = of(this.listUsers);

  ngOnInit(): void {
    this.users.subscribe((data) => {
      console.log(`🚀 ~ data 1:`, data);
      // ['user1', 'user2', 'user3'];
    });

    this.users$.subscribe((data) => {
      console.log(`🚀 ~ data 2:`, data);
      // ['user1', 'user2', 'user3'];
    });
  }
}
