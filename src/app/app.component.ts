import { Component } from '@angular/core';
import { Hero } from './hero';

// Create Array
const HEROS: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco'  },
  { id: 13, name: 'Bombasto'  },
  { id: 14, name: 'Celeritas'  },
  { id: 15, name: 'Magneta'  },
  { id: 16, name: 'RubberMan'  },
  { id: 17, name: 'Dynama'  },
  { id: 18, name: 'Dr IQ'  },
  { id: 19, name: 'Magma'  },
  { id: 20, name: 'Tornado'  }
];

// this is angular/core decorator template
// 이중 중괄호는 Angular의 Interpolation 바인딩 구문. -> React-JSX의 {}와 비슷
// ngModel을 사용하여 양방향 바인딩을 구현함. 데이터는 Property에서 텍스트 상자로, 텍스트상자에서 Property로 양 방향으로 흐름
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <!-- 특정 조건을 만족할때 li에 Anlugar의 selected CSS클래스를 추가해서 스타일을 변경함 -->
      <li *ngFor="let hero of heros"
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
  `]
})

export class AppComponent {
  title = 'Tour of Heroes - Kim';
  selectedHero: Hero; // AppComponentクラスで、ComponentのheroプロパティがHeroタイプにrefactoringされ、id = 1, name = Windstormに初期化されます。
  heros = HEROS; // Create public property for viewing HEROS

  // create select Handler function
  onSelect(hero: Hero): void { // return type void mean no data type - do not return any value
    this.selectedHero = hero;
  }
}
