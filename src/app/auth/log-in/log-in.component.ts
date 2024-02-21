import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { finalize, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent  implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private _authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    this._authService.showRegisterToast
      .pipe(
        finalize(() => this._authService.showRegisterToast.next(false))
      )
      .subscribe((show) => {
        if (show) {
          this.presentToast('top', 'register-info');
        }
      })
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this._authService.login(this.loginForm.getRawValue())
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', JSON.stringify(res));
          this.router.navigate(['/users']);
        },
        error: () => {
          this.loginForm.reset();
          this.presentToast('top', 'log-in-error');
        }
      })
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', messageInfo: string) {
    const toast = await this.toastController.create({
      message: this.translate.instant(messageInfo),
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
