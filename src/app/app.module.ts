import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CatgNavbarComponent } from './layouts/catg-navbar/catg-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { VectorArtComponent } from './pages/vector-art/vector-art.component';
import { FeaturedComponent } from './pages/vector-art/featured/featured.component';
import { SoldComponent } from './pages/vector-art/sold/sold.component';
import { AlComponent } from './pages/vector-art/al/al.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProgramingComponent } from './pages/programing/programing.component';
import { TComponent } from './pages/t/t.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { CommentFolderComponent } from './comments/comment-folder/comment-folder.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { SubscriptionFoldComponent } from './subscription/subscription-fold/subscription-fold.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatgNavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    VectorArtComponent,
    FeaturedComponent,
    SoldComponent,
    AlComponent,
    BlogComponent,
    ProgramingComponent,
    TComponent,
    ContactMeComponent,
    CommentFolderComponent,
    CommentListComponent,
    SubscriptionFoldComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
