import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { SlidesComponent } from './components/slides/slides.component';
import { FormComponent } from './components/form/form.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HospitalsComponent,
    AboutUsComponent,
    DoctorsComponent,
    SlidesComponent,
    FormComponent,
    BlogsComponent,
    TestimonialsComponent,
    SuccessModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
