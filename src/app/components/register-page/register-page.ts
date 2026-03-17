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

import { Component, signal } from '@angular/core'; // 1. Importer signal
import { UserCard } from '../user-card/user-card';
import { UserForm } from '../user-form/user-form';  
@Component({ selector: 'app-register-page',
   standalone: true,
 imports: [UserForm, UserCard],
  
template: `
<h1>Inscription</h1>
 <app-user-form (userCreated)="addUser($event)" />

<hr />

 <h2>Utilisateurs enregistrés :</h2>
 @for (u of users (); track u.email) {
 <app-user-card [user]="u" (deleteRequest)="removeUser(u)" />
}
`,
})



export class RegisterPage {
  // 2. Déclarer comme un signal
  users = signal<any[]>([]); 

  addUser(user: any) {
    // 3. Utiliser .update() pour ajouter au tableau
    this.users.update(prev => [...prev, user]);
  }

  removeUser(user: any) {
    // Filtrer pour supprimer
    this.users.update(prev => prev.filter(u => u !== user));
  }
}