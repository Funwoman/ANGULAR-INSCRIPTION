// user-form.component.ts
import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './user-form.html'
})
export class UserForm {
  // Définition de l'Output (Nouvelle syntaxe Angular)
  userCreated = output<any>(); 

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(18)]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userCreated.emit(this.userForm.value);
      this.userForm.reset(); // On vide le formulaire après envoi
    }
  }
}