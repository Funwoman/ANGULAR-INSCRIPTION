// user-card.component.ts
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.html'
})
export class UserCard {
  user = input.required<any>(); // Utilisation de input() (Signal)
  deleteRequest = output();
  delete() {
    this.deleteRequest.emit();
  }
}