import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../../services/send-data.service';

@Component({
    selector: 'app-line',
    templateUrl: './line.component.html',
    styleUrls: [ './line.component.css' ]
})
export class LineComponent implements OnInit {

    constructor(private data: SendDataService) { }
    
    ngOnInit() {
        this.data.currentData.subscribe(data =>  this.sampleData = data);
    }
    
    sampleData: any [] = [
        { Day: 'Monday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
        { Day: 'Tuesday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
        { Day: 'Wednesday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
        { Day: 'Thursday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
        { Day: 'Friday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
        { Day: 'Saturday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 },
        { Day: 'Sunday', Running: 0, Swimming: 0, Cycling: 0, Goal: 0 }
    ];

    padding: any = { left: 10, top: 10, right: 15, bottom: 10 };
    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
    getWidth() : any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }
        return 850;
    }

    xAxis: any =
    {
        dataField: 'Day',
        unitInterval: 1,
        tickMarks: { visible: true, interval: 1 },
        gridLinesInterval: { visible: true, interval: 1 },
        valuesOnTicks: false,
        padding: { bottom: 10 }
    };
    valueAxis: any =
    {
        unitInterval: 10,
        minValue: 0,
        maxValue: 100,
        title: { text: 'Time in minutes<br><br>' },
        labels: { horizontalAlignment: 'right' }
    };
    seriesGroups: any[] =
    [
        {
            type: 'line',
            series:
            [
                {
                    dataField: 'Swimming',
                    symbolType: 'square',
                    labels:
                    {
                        visible: true,
                        backgroundColor: '#FEFEFE',
                        backgroundOpacity: 0.2,
                        borderColor: '#7FC4EF',
                        borderOpacity: 0.7,
                        padding: { left: 5, right: 5, top: 0, bottom: 0 }
                    }
                },
                {
                    dataField: 'Running',
                    symbolType: 'square',
                    labels:
                    {
                        visible: true,
                        backgroundColor: '#FEFEFE',
                        backgroundOpacity: 0.2,
                        borderColor: '#7FC4EF',
                        borderOpacity: 0.7,
                        padding: { left: 5, right: 5, top: 0, bottom: 0 }
                    }
                },
                {
                    dataField: 'Cycling',
                    symbolType: 'square',
                    labels:
                    {
                        visible: true,
                        backgroundColor: '#FEFEFE',
                        backgroundOpacity: 0.2,
                        borderColor: '#7FC4EF',
                        borderOpacity: 0.7,
                        padding: { left: 5, right: 5, top: 0, bottom: 0 }
                    }
                },
                {
                    dataField: 'Goal',
                    symbolType: 'square',
                    labels:
                    {
                        visible: true,
                        backgroundColor: '#FEFEFE',
                        backgroundOpacity: 0.2,
                        borderColor: '#7FC4EF',
                        borderOpacity: 0.7,
                        padding: { left: 5, right: 5, top: 0, bottom: 0 }
                    }
                }
            ]
        }
    ];

}