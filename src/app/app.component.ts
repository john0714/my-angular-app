import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet> <!-- Router에 Component를 표시할 위치를 알려주기 위함 -->
  `
})

export class AppComponent {
  title = 'Tour of Heroes - Kim';
}
