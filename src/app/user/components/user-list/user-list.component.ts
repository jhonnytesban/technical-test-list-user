import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, finalize, tap } from 'rxjs';
import { Items } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import { UserUpdateComponent } from '../../modals/user-update/user-update.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent  implements OnInit {

  public userList = new BehaviorSubject<Items[]>([]);
  public isLoading = new BehaviorSubject<boolean>(false);

  constructor(private _usersService: UsersService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadUser();
  }

  async openModal(id: string) {
    const modal = await this.modalCtrl.create({
      component: UserUpdateComponent,
      componentProps: {
        userId: id
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    console.log('modal-close', data, role)
    if (role === 'confirm') {
      this._usersService.updateUser(id, data)
        .subscribe({
          next: () => {
            this.loadUser();
          },
          error: (error) => {
            console.log('ERROR', error);
          }
        })
    }
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
