import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/input-output/parent/parent.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'parent' },
  { path: 'parent', component: ParentComponent },
  {
    path: 'form',
    loadChildren: () =>
      import('./components/form/form.module').then((m) => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
