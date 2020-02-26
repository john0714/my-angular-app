import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

// this is angular/core decorator template
// Component의 메타 데이터들 - selector, template, styles, provider
// 이중 중괄호는 Angular의 Interpolation 바인딩 구문. -> React-JSX의 {}와 비슷
// ngModel을 사용하여 양방향 바인딩을 구현함. 데이터는 Property에서 텍스트 상자로, 텍스트상자에서 Property로 양 방향으로 흐름
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <!-- 특정 조건을 만족할때 li에 Anlugar의 selected CSS클래스를 추가해서 스타일을 변경함 -->
      <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
        <!-- "ngFor기능을 이용한 목록표시 -> heros요소에서 값을 가져와 루프(변수 hero로 하나씩 사용) -->
        <!-- 여기서 접두사 *은 <li>요소와 그 하위 요소가 템플릿을 구성함을 나타냄. -->
        <!-- 즉 그냥 ngFor구문은 템플릿 안에서 안의 요소를 지정해서 사용 가능하지만, *가 있으면 이미 템플릿 안의 DOM요소라고 판단해서 바로 요소가 사용 가능하게됨 -->
        <!-- 이외에도 *ngIf, *ngSwitch 같은것도 있음-->
        <!-- AppComponent메소드인 onSelect()를 호출하는 이벤트 바인딩(이번엔 클릭 이벤트)을 추가-->
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail> <!-- 이제 hero-detail에선 selectedHero를 표시하게됨 -->
  `, // CSS추가
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [HeroService] // providers는 Angular에게 AppComponent를 생성할 때 HeroService의 새로운 인스턴스를 생성하도록 지시함
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes - Kim';
  selectedHero: Hero; // AppComponentクラスで、ComponentのheroプロパティがHeroタイプにrefactoringされ、id = 1, name = Windstormに初期化されます。
  heroes: Hero[]; // Create public property for viewing HEROES(Heroes 항목 지정. heroes = Hero[]하면 값을 넣어는 의미가 되서 초기 데이터 없다고 Lint에러 뜨므로 「:」를 씀)
  // typeScript에서「:」은 형식의 체크 및 지정을 해주는 명령. 따라서 위에선 단순히 Hero라는 배열이란 것을 heroes변수에 지정한다는 의미가 된다.

  // 생성자 작성 - 이제 Angular는 AppComponent를 생성할 때 HeroService의 인스턴스를 제공하는 것을 알고있음.
  constructor(private heroService: HeroService) { }

  // create select Handler function
  onSelect(hero: Hero): void { // return type void mean no data type - do not return any value
    this.selectedHero = hero;
  }

  // 서비스 호출(promise방식)
  getHeroes(): void {
    this.heroService.getHeroes().then(h => this.heroes = h);
  }

  // Angular에서 getHeroes()를 사용하게 하기 위해 Angular ngOnInit라이프 사이클 훅을 구현할 수 있음
  // Component 라이프 사이클의 중요한 순간(생성, 변경, 최종파괴)의 작업을 의한 인터페이스를 제공함
  ngOnInit(): void {
    this.getHeroes();
  }
}
