import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SendDataService {

  private dataSource = new BehaviorSubject<any>('');
  currentData = this.dataSource.asObservable();

  constructor() { }

  sendData(data: any){
    this.dataSource.next(data);
  }
}
