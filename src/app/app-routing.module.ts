import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatgNavbarComponent } from './layouts/catg-navbar/catg-navbar.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { VectorArtComponent } from './pages/vector-art/vector-art.component';
import { FeaturedComponent } from './pages/vector-art/featured/featured.component';
import { SoldComponent } from './pages/vector-art/sold/sold.component';
import { AlComponent } from './pages/vector-art/al/al.component';
import { ProgramingComponent } from './pages/programing/programing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { TComponent } from './pages/t/t.component';

const routes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'Category', component: CatgNavbarComponent},
 { path: 'Home', component: HomeComponent},
 { path: 'About Me', component: AboutMeComponent},
 { path: 'Vector Art Designs', component: VectorArtComponent},
 { path: 'Vector Art Designs/Featured Designs', component: FeaturedComponent},
 { path: 'Vector Art Designs/Sold Designs', component: SoldComponent},
 { path: 'Vector Art Designs/All Designs', component: AlComponent },
 { path: 'Programming', component: ProgramingComponent},
 { path: 'Blog', component: BlogComponent},
 { path: 'Contact Me', component: ContactMeComponent},
 { path: 'T&C', component: TComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
