import { AppComponent } from "./app-root/app.component";
import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: MainComponent
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
  export class AppRoutingModule {
  }