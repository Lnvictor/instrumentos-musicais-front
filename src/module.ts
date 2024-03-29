import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavComponent } from "./app/nav/nav.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MainComponent } from "./app/main/main.component";
import { ItemComponent } from "./app/item/item.component";
import { AppRoutingModule } from "./app/app-routing/app-routing.module";
import { LoginComponent } from "./app/login/login.component";

@NgModule(
    {
        providers: [],
        declarations: [AppComponent, NavComponent, MainComponent, ItemComponent, LoginComponent],
        imports: [BrowserModule, HttpClientModule, AppRoutingModule],
        bootstrap: [AppComponent]
    }
)
export class Module{

}