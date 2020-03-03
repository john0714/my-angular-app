import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Hero } from './hero';

// Injectable Decorator추가 -> TypeScript가 Service에 대한 메타 데이터를 보내도록 지시함
// HeroService는 웹 서비스, 로컬 스토리지 또는 Mock데이터 소스와 같이 어디서나 Hero데이터를 가져올 수 있습니다.
@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // Hero서비스를 Promise로 만들기
  // Promise는 본질적으로 결과가 준비될 때 콜백 할것을 약속합니다. 비동기 Service작업을 수행하고 콜백 기능을 제공하도록 요청합니다.
  getHero(id: number): Promise<Hero> { // get-by-id형식으로 API에서 값을 받아옴
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.valueOf() as Hero)
      .catch(this.handleError);
  }

  getHeroes(): Promise<Hero[]> { // 비동기 연결 구축
    return this.http.get(this.heroesUrl)
      .toPromise() // http.get은 Observavble을 반환함(객체). 이 객체는 예전엔 toPromise를 제공 안해서 다른 모듈을 import해야했지만 지금은 제공해서 안해도됨
      .then(response => response.valueOf() as Hero[])
      .catch(this.handleError); // 에러 핸들링
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers}) // put()을 사용하여 서버에 변경을 지속함
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.valueOf() as Hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
