import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdiminArticleEditComponent } from './admin/admin-article-edit/admin-article-edit.component';
import { AdminArticleAddComponent } from './admin/admin-article-add/admin-article-add.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

const routes: Routes = [
  {path: '', component: NavComponent},
  {path : 'register' , component: RegisterComponent} , 
  {path: 'nav' , component: NavComponent} , 
  {path : 'admin/article/edit/:id' , component: AdiminArticleEditComponent} ,
  {path : 'admin/article/add' , component: AdminArticleAddComponent} ,
  {path : 'admin/course' , component: CoursesComponent} ,
  {path: 'not-found', component: NotFoundComponent},
  {path : 'server-error' , component: ServerErrorComponent} ,
  {path : '**' , component: NotFoundComponent , pathMatch:'full'} //if wrong url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
