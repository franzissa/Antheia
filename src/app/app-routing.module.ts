import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArbeitsplatzComponent} from "./kategorie/arbeitsplatz.component";
import {ChallengeBoardComponent} from "./challenge-board/challenge-board.component";
import {ChallengeDetailsComponent} from "./challenge-details/challenge-details.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {InboxComponent} from "./inbox/inbox.component";
import {IssueTrackerComponent} from "./issue-tracker/issue-tracker.component";
import {LeaderBoardComponent} from "./leader-board/leader-board.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {RewardsComponent} from "./rewards/rewards.component";
import {SettingComponent} from "./setting/setting.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'challenge-board', component: ChallengeBoardComponent },
      {path: 'inbox', component: InboxComponent},
      {path: 'issue-tracker', component: IssueTrackerComponent},
      {path: 'leader-board', component: LeaderBoardComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'rewards', component: RewardsComponent},
      {path: 'settings', component: SettingComponent},
      {path: 'kategorie', component: ArbeitsplatzComponent},
      { path: 'challenge-details', component: ChallengeDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
