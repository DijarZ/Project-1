import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  private searchKeyword = new BehaviorSubject<string>('');

  setSearchKeyword(keyword: string): void {
    this.searchKeyword.next(keyword);
  }

  getSearchKeyword(): Observable<string> {
    return this.searchKeyword.asObservable();
  }
}
