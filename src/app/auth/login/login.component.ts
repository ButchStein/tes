import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {AuthService} from '../../shared/services/auth.service';


@Component({
  selector: 'tip-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;


  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(null),
      password: new FormControl(null)
    });
  }


  onSubmit() {
    // const formData = this.form.value;

    this.usersService.getData()
      .subscribe((response: Response) => {
        if (response) {
          console.log('Ok');
        }
      });
  }
}



