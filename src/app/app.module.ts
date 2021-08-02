import { NgModule } from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IssueTrackerComponent } from './issue-tracker/issue-tracker.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ChallengeBoardComponent } from './challenge-board/challenge-board.component';
import { RewardsComponent } from './rewards/rewards.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { InboxComponent } from './inbox/inbox.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IssueTrackerComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ChallengeBoardComponent,
    RewardsComponent,
    LeaderBoardComponent,
    InboxComponent,
    SettingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
