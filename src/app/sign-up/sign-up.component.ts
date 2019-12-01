import { Component, OnInit } from '@angular/core';
import { SignupInfo } from '../entity/signup-info';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupInfo: SignupInfo;
  isSignupFailed =  false;
  errorMessage = '';
  isSignedUp = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signupInfo = new SignupInfo('', '', '');
  }

  onSubmit() {
    this.userService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
      },
      error => {
        console.log(error);
        this.errorMessage = error.message;
        this.isSignupFailed = true;
      }
    );
  }

}
