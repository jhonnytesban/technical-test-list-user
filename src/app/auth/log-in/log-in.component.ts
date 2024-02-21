import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent  implements OnInit {

  loginForm!: FormGroup;

  constructor(private _authService: AuthService, private router: Router, private toastController: ToastController) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
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
          this.presentToast('top');
        }
      })
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'El email o contraseña es incorrecta',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
