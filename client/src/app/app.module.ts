import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import {ToastrModule} from 'ngx-toastr';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminGroupComponent } from './admin/admin-group/admin-group.component';
import { AdminArticleComponent } from './admin/admin-article/admin-article.component';
import { AdiminArticleEditComponent } from './admin/admin-article-edit/admin-article-edit.component';
import { AdminArticleAddComponent } from './admin/admin-article-add/admin-article-add.component';
import { CoursesComponent } from './courses/courses.component';
import { EditUpdateCoursesComponent } from './edit-update-courses/edit-update-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptor/loading.interceptor';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { BasketComponent } from './basket/basket.component';
import { BasketSummaryComponent } from './basket-summary/basket-summary.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavComponent,
    AdminGroupComponent,
    AdminArticleComponent,
    AdiminArticleEditComponent,
    AdminArticleAddComponent,
    CoursesComponent,
    EditUpdateCoursesComponent,
    BasketComponent,
    BasketSummaryComponent,
    CoursesListComponent,
    NotFoundComponent,
    ServerErrorComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule , 
    FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgxSpinnerModule ,
    ToastrModule.forRoot({
      positionClass : "toast-bottom-right"
    })

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:LoadingInterceptor , multi:true} , 
    {provide:HTTP_INTERCEPTORS , useClass:ErrorInterceptor , multi:true}
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
