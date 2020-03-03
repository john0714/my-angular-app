import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heros';

// Injectable Decorator추가 -> TypeScript가 Service에 대한 메타 데이터를 보내도록 지시함
// HeroService는 웹 서비스, 로컬 스토리지 또는 Mock데이터 소스와 같이 어디서나 Hero데이터를 가져올 수 있습니다.
@Injectable()
export class HeroService {
  // Hero서비스를 Promise로 만들기
  // Promise는 본질적으로 결과가 준비될 때 콜백 할것을 약속합니다. 비동기 Service작업을 수행하고 콜백 기능을 제공하도록 요청합니다.
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
