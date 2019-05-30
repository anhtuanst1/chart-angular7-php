import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../../services/send-data.service';

@Component({
  selector: 'app-table-input-data',
  templateUrl: './table-input-data.component.html',
  styleUrls: ['./table-input-data.component.css']
})
export class TableInputDataComponent implements OnInit {

  constructor(private data: SendDataService) { }

  ngOnInit() {
    this.data.sendData(JSON.parse(JSON.stringify(this.RootData)));
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  }

  applyData() {
    this.data.sendData(JSON.parse(JSON.stringify(this.InputData)));
    // this.sampleData = JSON.parse(JSON.stringify(this.InputData));
    // this.valueAxis.maxValue = JSON.parse(JSON.stringify(this.max_value));
    this.max_value = 100;
  }

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  RootData: any[] = [
    { Day: 'Monday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
    { Day: 'Tuesday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
    { Day: 'Wednesday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
    { Day: 'Thursday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
    { Day: 'Friday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
    { Day: 'Saturday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
    { Day: 'Sunday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 }
  ];

  InputData = JSON.parse(JSON.stringify(this.RootData));
  sampleData = JSON.parse(JSON.stringify(this.RootData));
  max_value = 0;

  updateData(id, value): any{
    var data = this.InputData;
    if(this.max_value <= value){
      this.max_value = Number(value) + 50;
    }
    for (let idx in data) {
      var day = data[idx].Day.toLowerCase( );
      if(day.indexOf(id[0]) > -1){
        switch(id[1]) {
          case "swimming":
            data[idx].Swimming = value;
            break;
          case "running":
            data[idx].Running = value;
            break;
          case "cycling":
            data[idx].Cycling = value;
            break;
          case "goal":
            data[idx].Goal = value;
            break;
        }
      }
    }
    this.InputData = data;
  }

}
