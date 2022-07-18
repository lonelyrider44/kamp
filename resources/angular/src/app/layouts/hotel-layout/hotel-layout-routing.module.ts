import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hotel' },
  {
    path: '',
    children: [{
        path: 'hotel',
        loadChildren: () => import('../../modules/hotel/hotel.module').then(m => m.HotelModule)
    }],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelLayoutRoutingModule { }
