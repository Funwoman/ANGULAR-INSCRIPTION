

// Configuration initiale


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class User {}


import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root' // Cela rend le service disponible dans TOUTE l'application
})
export class UserService {
  // 1. La source de vérité (notre liste d'utilisateurs)
  private usersSignal = signal<any[]>([]);

  // 2. On expose le signal en lecture seule pour protéger les données
  users = this.usersSignal.asReadonly();

  // 3. Méthode pour ajouter un utilisateur
  addUser(user: any) {
    this.usersSignal.update(current => [...current, user]);
  }

  // 4. Méthode pour supprimer un utilisateur
  removeUser(userToDelete: any) {
    this.usersSignal.update(current => 
      current.filter(u => u.email !== userToDelete.email)
    );
  }
}