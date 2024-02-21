import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.scss'],
})
export class UserPageComponent implements OnInit{
  public userMe!: User;

  constructor(private router: Router, private _usersService: UsersService) {}

  ngOnInit(): void {
    this._usersService.getUserMe()
      .subscribe((userMe) => this.userMe = userMe);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
