import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"
import { MainComponent } from "../main/main.component"
import { LoginComponent } from "../login/login.component"

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'login', 
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }