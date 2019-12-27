import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WjNavModule } from '@grapecity/wijmo.angular2.nav';
import { WjInputModule, WjMenu } from '@grapecity/wijmo.angular2.input';
import { DataService } from './app.data';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
    imports: [WjNavModule, WjInputModule, BrowserModule],
    declarations: [AppComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}