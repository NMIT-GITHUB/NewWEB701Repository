import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { PollComponent } from './modules/poll/poll.component';

import { CommonModule } from '@angular/common';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { DonationPanelComponent } from './modules/donation-panel/donation-panel.component';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { GalleryLightboxComponent } from './modules/gallery-lightbox/gallery-lightbox.component';
import { UploadItemComponent } from './modules/upload-item/upload-item.component';
import { FooterComponent } from './modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DonateComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ContactComponent,
    AboutComponent,
    DonationPanelComponent,
    CarouselComponent,
    GalleryLightboxComponent,
    PollComponent,
    UploadItemComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgbModule,
    GalleryModule,
    LightboxModule,
    MatFormFieldModule,
    FontAwesomeModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }

