import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  constructor(private data: DataService){ }

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

  ngOnInit() {
    this.data.sendData(this.RootData);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  }

  applyData() {
    // this.sampleData = JSON.parse(JSON.stringify(this.InputData));
    // this.valueAxis.maxValue = JSON.parse(JSON.stringify(this.max_value));
    this.max_value = 100;
  }

  InputData = JSON.parse(JSON.stringify(this.RootData));
  max_value = 0;

  updateData(id, value): any{
    var data = this.InputData;
    if(this.max_value <= value){
        this.max_value = Number(value) + 50;
        console.log(this.max_value);
    }
    for (let idx in data) {
        var day = data[idx].Day.toLowerCase( );
        if(day.indexOf(id[0]) > -1){
            console.log(' ---- 111 ');
            switch(id[1]) {
                case "swimming":
                    console.log(' ---- 222 ');
                    data[idx].Swimming = value;
                    break;
                case "running":
                    console.log(' ---- 333 ');
                    data[idx].Running = value;
                    break;
                case "cycling":
                    console.log(' ---- 444 ');
                    data[idx].Cycling = value;
                    break;
                case "goal":
                    console.log(' ---- 555 ');
                    data[idx].Goal = value;
                    break;
            }
        }
    }
    this.InputData = data;
  }
}