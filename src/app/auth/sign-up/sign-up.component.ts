import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  registerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    const { email, password } = this.registerForm.value;
    // this.authService.register(email, password)
    //   .subscribe((data) => {
    //     // Redireccionar al usuario a la página principal
    //     // o realizar otra acción según sea necesario
    //   }, (error) => {
    //     // Mostrar un mensaje de error al usuario
    //   });
  }

}
