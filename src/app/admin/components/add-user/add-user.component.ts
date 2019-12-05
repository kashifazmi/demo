import { Component, OnInit, OnDestroy } from '@angular/core';

import { CommonService } from 'src/app/shared/services/common.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // fetch master details from service
    this.subscription = this.commonService.updateMasterValue.subscribe((value) => {
      console.log('value ', value);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
