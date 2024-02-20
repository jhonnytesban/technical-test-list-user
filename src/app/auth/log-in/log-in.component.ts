import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent  implements OnInit {

  loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    // this.authService.login(email, password)
    //   .subscribe((data) => {
    //     // Redireccionar al usuario a la página principal
    //     // o realizar otra acción según sea necesario
    //   }, (error) => {
    //     // Mostrar un mensaje de error al usuario
    //   });
  }

}
