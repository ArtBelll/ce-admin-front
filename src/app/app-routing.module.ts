import { AppComponent } from "./app-root/app.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    children: [
      {
        path: 'profile',
      }
    ]
  }
  {
    path: 'profile',
    component: ProfileComponent
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