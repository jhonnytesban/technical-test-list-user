import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private _authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }
  
    this._authService.register(this.registerForm.getRawValue())
      .subscribe({
        next: () => {
          this._authService.showRegisterToast.next(true);
          this.router.navigate(['/auth/login']);
        },
        error: () => {
          this.presentToast('top', 'register-error');
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
