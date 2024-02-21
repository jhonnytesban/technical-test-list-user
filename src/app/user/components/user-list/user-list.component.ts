import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, finalize, tap } from 'rxjs';
import { Items } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent  implements OnInit {

  public userList = new BehaviorSubject<Items[]>([]);
  public isLoading = new BehaviorSubject<boolean>(false);

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(): void {
    this.isLoading.next(true)
    this._usersService.getAllUsers()
    .pipe(
      finalize(() => this.isLoading.next(false))
    )
    .subscribe({
      next: (res) => {
        this.userList.next(res.items);
      },
      error: (error) => {
        console.log('ERROR', error)
      }
    })

  }

  deleteUser(id: string): void {
    this._usersService.deleteUser(id)
      .subscribe({
        next: () => {
          this.loadUser();
        },
        error: (error) => {
          console.log('ERROR', error)
        }
      })
  }

}
