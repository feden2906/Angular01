import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostComponent,
    HomeComponent,
    PostsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: 'users', component:UsersComponent},
      {path: 'posts', component:PostsComponent},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
