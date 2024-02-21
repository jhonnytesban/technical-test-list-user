import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent  implements OnInit {

  public updateUserForm!: FormGroup;

  constructor(private modalCtrl: ModalController, private navParams: NavParams, private _userService: UsersService) {
    this.updateUserForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      name: new FormControl('',),
      surname: new FormControl('',),
    });
  }

  ngOnInit(): void {
    const userId = this.navParams.get('userId');
    this._userService.getUserById(userId)
      .subscribe({
        next: (res) => {
          this.updateUserForm.patchValue(res);
        }
      })
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.updateUserForm.getRawValue(), 'confirm');
  }
}
