// // register-page.component.ts

// import { Component } from '@angular/core';
// import { UserCard } from '../user-card/user-card';
// import { UserForm } from '../user-form/user-form';

// @Component({
//   selector: 'app-register-page',
//   standalone: true,
//   imports: [UserForm, UserCard],

//   template: `
//     <h1>Inscription</h1>
//     <app-user-form (userCreated)="addUser($event)" />

//     <hr />

//     <h2>Utilisateurs enregistrés :</h2>
//     @for (u of users; track u.email) {
//       <app-user-card [user]="u" (deleteRequest)="removeUser(u)" />
//     }
//   `,
// })

// export class RegisterPage {
//   users: any[] = [];

//   addUser(userData: any) {
//     this.users.push(userData);
//   }

//   removeUser(user: any) {
//     this.users = this.users.filter((u) => u !== user);
//   }
// }

// Modification Ajout de l'enregistrement des utilisateurs dans un navigateur.

// import { Component, signal } from '@angular/core'; // 1. Importer signal
// import { UserCard } from '../user-card/user-card';
// import { UserForm } from '../user-form/user-form';
// @Component({ selector: 'app-register-page',
//    standalone: true,
//  imports: [UserForm, UserCard],

// template: `
// <h1>Inscription</h1>
//  <app-user-form (userCreated)="addUser($event)" />

// <hr />

//  <h2>Utilisateurs enregistrés :</h2>
//  @for (u of users (); track u.email) {
//  <app-user-card [user]="u" (deleteRequest)="removeUser(u)" />
// }
// `,
// })

// export class RegisterPage {
//   // 2. Déclarer comme un signal
//   users = signal<any[]>([]);

//   addUser(user: any) {
//     // 3. Utiliser .update() pour ajouter au tableau
//     this.users.update(prev => [...prev, user]);
//   }

//   removeUser(user: any) {
//     // Filtrer pour supprimer
//     this.users.update(prev => prev.filter(u => u !== user));
//   }
// }

// Modification finale : Utilisation du service UserService pour gérer les utilisateurs de manière centralisée

import { Component, inject } from '@angular/core'; // Ajoute 'inject'

// Importe ton service
import { UserCard } from '../user-card/user-card';
import { UserForm } from '../user-form/user-form';
import { UserService } from '../../services/user';
// Importe ton service
// ... tes autres imports (UserForm, UserCard)

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [UserForm, UserCard],

  // ... selector, standalone, imports, template restent pareils
  // MAIS dans le @for, utilise : userService.users()
  template: `
    <h1>Inscription</h1>
    <app-user-form (userCreated)="addUser($event)" />
    <hr />
    <h2>Utilisateurs enregistrés :</h2>
    @for (u of userService.users(); track u.email) {
      <app-user-card [user]="u" (deleteRequest)="removeUser(u)" />
    }
  `,
})
export class RegisterPage {
  // On "injecte" le service pour y avoir accès
  protected readonly userService: UserService = inject(UserService);

  addUser(user: any) {
    this.userService.addUser(user); // On délègue au service
  }

  removeUser(user: any) {
    this.userService.removeUser(user); // On délègue au service
  }
}
