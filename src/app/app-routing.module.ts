import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './common/info/info.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path : '', component : FormComponent},
  {path : 'info', component : InfoComponent},
  {path : 'result', component : ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
