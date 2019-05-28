import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendData(sampleData: any){
    this.messageSource.next(sampleData);
  }
}
