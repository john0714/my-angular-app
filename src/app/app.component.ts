import { Component } from '@angular/core';

// 複数Export可能, Object(안에 있는 id, name같은건 Property)作成
export class Hero {
  id: number;
  name: string;
}

// this is angular/core decorator template
// 이중 중괄호는 Angular의 Interpolation 바인딩 구문. -> React-JSX의 {}와 비슷
// ngModel을 사용하여 양방향 바인딩을 구현함. 데이터는 Property에서 텍스트 상자로, 텍스트상자에서 Property로 양 방향으로 흐름
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})

export class AppComponent {
  title = 'Tour of Heroes - Kim';
  hero: Hero = { // AppComponentクラスで、ComponentのheroプロパティがHeroタイプにrefactoringされ、id = 1, name = Windstormに初期化されます。
    id: 1,
    name : 'Windstorm'
  };
}
