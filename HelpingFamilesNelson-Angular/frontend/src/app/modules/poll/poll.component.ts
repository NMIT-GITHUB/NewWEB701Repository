import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  currentUser: any;
  isSuccessful = false;
  isRedeemedFailed = false;
  errorMessage = '';

  constructor(private token: TokenStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
 //Sends the logged in users details and the given value to authService to begin passing data to backend
  vote(value: string) {
    this.authService.redeem(this.currentUser.username, value).subscribe(
      data => {
        //makes sure the tokens are of the same value
        this.currentUser.tokens = data.tokens;
        this.isSuccessful = true;
        this.isRedeemedFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRedeemedFailed = true;
      }
    );
  }
}
