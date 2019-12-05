import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  //#region -  Set Behavioural subject for master data
  private masterDetails = new BehaviorSubject({ masterValue: '' });
  updateMasterValue = this.masterDetails.asObservable();
  //#endregion

  setMasterDetails(value: any) {
    this.masterDetails.next(value);
  }
}
