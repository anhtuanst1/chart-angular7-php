import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chart-angular7-php';
  activeTab = '';

  chart_menus: any[] = ['dashboard', 'line'];

  SwitchTab(activeTab){
    this.activeTab = activeTab;
  }
  
}
