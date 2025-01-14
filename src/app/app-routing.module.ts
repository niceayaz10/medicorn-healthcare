import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { HomeComponent } from './components/home/home.component';
// import { HospitalsComponent } from './components/hospitals/hospitals.component';
// import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutUsComponent },
  // { path: 'hospitals', component: HospitalsComponent },
  // { path: 'doctors', component: HospitalsComponent },
  // { path: 'news', component: NewsComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
