import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  public static Common_APIURL = {
    MasterDetails: {
      GET: 'rms/masterdetails'
    }
  }
}
