import { Component, OnInit } from '@angular/core';
import { SigninInfo } from '../entity/signin-info';
import { UserService } from '../service/user.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinInfo: SigninInfo;
  username: string;
  isSignedIn = false;

  constructor(private userService: UserService, private tokenService: TokenStorageService) { }

  ngOnInit() {
    this.signinInfo = new SigninInfo('', '');
  }

  onSubmit() {
    console.log(this.signinInfo.username);
    console.log(this.signinInfo.password);

    this.userService.signIn(this.signinInfo).subscribe(
      data => {
        console.log(data);
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUsername(data.username);
        this.tokenService.saveAuthorities(data.authorities);
        this.username = this.tokenService.getUsername();
        this.isSignedIn = true;
      },
      error => {
        console.log(error);
      }
    );


  }

}
