import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// @Component Decorator는 Component의 Angular메타 데이터를 제공합니다. CSS선택자 이름인 hero-detail은 상위 Component의 템플릿 내에서 이 Component를 식별하는 엘리먼트 태그와 일치합니다.
@Component({
  selector: 'hero-detail', // CSS selector인 이 이름은 HeroDetailComponent를 나타내는 엘리먼트 태그 이름임<hero-detail></hero-detail>의 형태로 사용
  template: `
    <div *ngIf="hero"> <!-- detail画像を他のComponentにして、。 -->
      <h2>{{hero.name}} details!</h2> <!-- Detail템플릿(master/detail UI패턴)-->
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})

// 항상 다른곳에서 import하기 때문에 컴포넌트 클래스는 언제나 export해야 합니다.
export class HeroDetailComponent {
  // Input Decorator를 추가하여 hero를 입력 프로퍼티라고 선언합니다.
  // 이로써 hero는 HeroDetailComponent클래스의 유일한 프로퍼티입니다.
  // 하는 일은 hero입력 프로퍼티를 통해 Hero객체를 받은 다음 템플릿의 해당 프로퍼티에 바인딩 하는것입니다.
  @Input() hero: Hero;
}
