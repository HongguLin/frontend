import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogWriterComponent } from './blog-writer/blog-writer.component';
import { httpInterceptorProvider } from './service/auth-interceptor.service';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdvSearchComponent } from './adv-search/adv-search.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    BlogListComponent,
    BlogDetailsComponent,
    BlogWriterComponent,
    UserComponent,
    AdminComponent,
    AdvSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule
  ],
  providers: httpInterceptorProvider,
  bootstrap: [AppComponent]
})
export class AppModule { }
