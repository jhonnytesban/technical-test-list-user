import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  registerForm!: FormGroup;

  constructor(private _authService: AuthService) { }

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
        next: (res) => {
          console.log('OK', res)
        },
        error: (error) => {
          console.log('ERROR', error)
        }
      })
  }

}
