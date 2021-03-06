import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { SaveComponent } from './save/save.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{path:'list',
component:ListComponent

},
{
  path:'add',
  component:SaveComponent
},
{
  path:'edit/:users',
  component:UpdateComponent

},
{
  path:'delete:users',
  component:DeleteComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
