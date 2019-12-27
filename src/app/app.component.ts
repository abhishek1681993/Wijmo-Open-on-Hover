import { Component, ViewChild, Inject } from '@angular/core';
import { WjInputModule, WjMenu } from '@grapecity/wijmo.angular2.input';
import { DataService } from './app.data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('theMenu') theMenu: WjMenu;
    data: any[];
    contextMenus = [];
    //
    constructor(@Inject(DataService) private dataService: DataService) {
        this.data = dataService.getData();
    }
    //
    showContextMenu(e: any) {
        e.preventDefault();
        setTimeout(() => {
            this.contextMenus = [{label: 'L1', value: 'L11', items: [
                {label: 'L11', value: 'L11'},
                {label: 'L12', value: 'L12'},
                {label: 'L13', value: 'L13'},
                {label: 'L14', value: 'L14'},
                {label: 'L15', value: 'L15'},
            ]},
            {label: 'L2', value: 'L11', items: [
                {label: 'L21', value: 'L21'},
                {label: 'L22', value: 'L22'},
                {label: 'L23', value: 'L23'},
                {label: 'L24', value: 'L24'},
                {label: 'L25', value: 'L25'},
            ]}];

            this.theMenu.show(e);
        }, 1000)
        
    }
    //
    menuItemClick(contextMenu: WjMenu) {
        alert('thanks for selecting ' + contextMenu.selectedValue);
    }
}
