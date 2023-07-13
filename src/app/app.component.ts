import { Component } from '@angular/core';
import { Observable, filter, from, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-tutorial';

  testInterval$ = interval(1000);

  ngOnInit(): void {
    // this.testInterval$.subscribe((data) => {
    //   console.log(`🚀 ~ data:`, data);
    //   // data chạy từ 0 và tăng 1 đơn vị sau mỗi 1s
    // });

    this.testInterval$
      .pipe(
        map((value) => value * 2), // biến đổi giá trị,
        filter((value) => value % 5 === 0), // lọc giá trị
        take(4) // lấy 4 giá trị đầu
      )
      .subscribe((data) => {
        console.log(`🚀 ~ data:`, data);
      });
  }
}
