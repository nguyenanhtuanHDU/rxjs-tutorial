import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-tutorial';

  listUsers: string[] = ['user1', 'user2', 'user3'];
  users: Observable<string> = from(this.listUsers); // from: chỉ truyền vào mảng

  ngOnInit(): void {
    this.users.subscribe((data) => {
      console.log(`🚀 ~ data:`, data);
      // 'user1'
      // 'user2'
      // 'user3'
    });
  }
}
