import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavComponent } from "./app/nav/nav.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MainComponent } from "./app/main/main.component";
import { ItemComponent } from "./app/item/item.component";

@NgModule(
    {
        providers: [],
        declarations: [AppComponent, NavComponent, MainComponent, ItemComponent],
        imports: [BrowserModule, HttpClientModule],
        bootstrap: [AppComponent]
    }
)
export class Module{

}