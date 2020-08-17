import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionEntryComponent } from './region-entry/region-entry.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '', component:MainPageComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
