import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { OpremaIndexLayoutComponent } from './oprema-index-layout/oprema-index-layout.component';
import { OpremaIndexTreneriDatatableComponent } from './oprema-index-treneri-datatable/oprema-index-treneri-datatable.component';
import { OpremaIndexUcesniciDatatableComponent } from './oprema-index-ucesnici-datatable/oprema-index-ucesnici-datatable.component';
import { OpremaLayoutComponent } from './oprema-layout/oprema-layout.component';
import { OpremaStatistikaComponent } from './oprema-statistika/oprema-statistika.component';
import { OpremaTreneriDatatableComponent } from './oprema-treneri-datatable/oprema-treneri-datatable.component';
import { OpremaTreneriStatistikaDatatableComponent } from './oprema-treneri-statistika-datatable/oprema-treneri-statistika-datatable.component';
import { OpremaUcesniciDatatableComponent } from './oprema-ucesnici-datatable/oprema-ucesnici-datatable.component';
import { OpremaUcesniciStatistikaDatatableComponent } from './oprema-ucesnici-statistika-datatable/oprema-ucesnici-statistika-datatable.component';

const routes: Routes = [
  // { 
    // path: ':opremaId/:smenaId', component: OpremaLayoutComponent, children:[
    //     { path: '', redirectTo: 'majice', pathMatch: 'full' },
    //     { path: 'majice', component: OpremaUcesniciDatatableComponent },
    //     { path: 'sorc', component: OpremaUcesniciDatatableComponent },
    //     { path: 'duks', component: OpremaUcesniciDatatableComponent },
    //     { path: 'trenerke', component: OpremaUcesniciDatatableComponent },
    //   ]
    // },
    { path: '', component: OpremaIndexLayoutComponent,children: [
      { path: '', pathMatch: 'full', redirectTo: 'ucesnici'}, 
      { path: 'ucesnici', component: OpremaUcesniciDatatableComponent },
      { path: 'ucesnici/:oprema/:smenaId/:polId/:velicinaId', component: OpremaUcesniciDatatableComponent },
      { path: 'ucesnici-statistika', component: OpremaUcesniciStatistikaDatatableComponent },
      
      { path: 'treneri', component: OpremaTreneriDatatableComponent },
      { path: 'treneri/:oprema/:smenaId/:polId/:velicinaId', component: OpremaUcesniciDatatableComponent },
      { path: 'treneri-statistika', component: OpremaTreneriStatistikaDatatableComponent },

      { path: 'statistika', component: OpremaStatistikaComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpremaRoutingModule { }
