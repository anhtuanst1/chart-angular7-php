import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chart-angular7-php';
  activeTab = '';

  chart_menus: any[] = ['dashboard', 'line', 'circle'];
  isMenuOpen = false;

  SwitchTab(activeTab){
    this.activeTab = activeTab;
  }

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  constructor(private renderer: Renderer2) {
    /**
     * This events get called by all clicks on the page
     */
    this.renderer.listen('window', 'click',(e:Event)=>{
        /**
        * Only run when toggleButton is not clicked
        * If we don't check this, all clicks (even on the toggle button) gets into this
        * section which in the result we might never see the menu open!
        * And the menu itself is checked here, and it's where we check just outside of
        * the menu and button the condition abbove must close the menu
        */
        if(this.toggleButton !== undefined && this.menu !== undefined){
          if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
              this.isMenuOpen=false;
          }
        }
    });
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
