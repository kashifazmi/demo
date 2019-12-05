import { Component, OnInit } from '@angular/core';

import { BaseService } from '../../services/base.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private baseService: BaseService, private commonService: CommonService) { }

  ngOnInit() {
    this.getMasterData();
  }

  //#region - Set and get Master data
  getMasterData() {
    this.baseService.getMasterData()
      .subscribe((data) =>
        this.setMasterData(data)
      )
  }
  /**
   * 
   * @param data : recieved master value for rms
   */
  setMasterData(data) {
    this.commonService.setMasterDetails({ masterValue: data });
  }
  //#endregion
}
