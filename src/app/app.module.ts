import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // ngModule은 FormsModule에 포함되 있으므로, FormsModule을 Import해서 사용
import { HeroDetailComponent } from './hero-detail.component'; // 모든 컴포넌트는 하나의(그리고 오직 한번만) Angular모듈로 선언되어야함.
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  // 일반적으로 declarations배열은 모듈에 속한 Component, Pipe 및 Directive응용 프로그램 목록을 포함함.(자세한건 NgModules가이드 참고)
  // 다른 Component가 참조하기 전에 Component를 모듈에서 선언해야함
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ // Angular Router를 사용하여 Navigation을 활성화합니다.(Angular Router는 RouterModule이라고 하는 외부의 선택적 Angular NgModule입니다.)
      {
        path: 'heroes',
        component: HeroesComponent
      },
      { // dashboard
        path: 'dashboard',
        component: DashboardComponent
      },
      { // Redirect
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [
    HeroService
  ], // providers는 Angular에게 AppComponent를 생성할 때 HeroService의 새로운 인스턴스를 생성하도록 지시함
  bootstrap: [AppComponent]
})
export class AppModule { }
