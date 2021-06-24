import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { faHome, faQuestionCircle, faPhone, faCloudUploadAlt, faUsers, faUserPlus, faSignInAlt, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  faHome = faHome;
  faQuestionCircle = faQuestionCircle;
  faPhone = faPhone;
  faCloudUploadAlt = faCloudUploadAlt;
  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
