import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { HeaderDashboardpageComponent } from './shared-components/header-dashboardpage/header-dashboardpage.component';
import { CandidateReviewComponent } from './dashboardpage/candidate-review/candidate-review.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AdvancedSearchComponent } from './dashboardpage/advanced-search/advanced-search.component';
import { WriteReviewComponent } from './dashboardpage/write-review/write-review.component';
import { CheckReviewComponent } from './dashboardpage/check-review/check-review.component';
import { ViewReviewComponent } from './dashboardpage/view-review/view-review.component';
import { ViewAllComponent } from './dashboardpage/view-all/view-all.component';
import { DashboardReviewComponent } from './dashboardpage/dashboard-review/dashboard-review.component';
import { SearchResultComponent } from './dashboardpage/advanced-search/search-result/search-result.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardpageComponent,
    HeaderDashboardpageComponent,
    CandidateReviewComponent,
    AdvancedSearchComponent,
    WriteReviewComponent,
    CheckReviewComponent,
    ViewReviewComponent,
    ViewAllComponent,
    DashboardReviewComponent,
    SearchResultComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RatingModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
