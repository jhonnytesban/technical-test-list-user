import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent  implements OnInit {

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getAllUsers()
      .subscribe({
        next: (res) => {
          console.log('RES', res)
        },
        error: (error) => {
          console.log('ERROR', error)
        }
      })
  }

}
