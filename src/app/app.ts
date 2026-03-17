// import { Component, signal } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
// import { RegisterPage } from './components/register-page/register-page';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.html',
//   imports: [RouterOutlet, RegisterPage, RouterLink],
//   standalone: true,
//   styleUrl: './app.css',
// })
// export class App {
//   protected readonly title = signal('angular-inscription');
// }

// Suggestion Gemini. J'ai ajouté protexted readonly title = signal('angular-inscription'); pour que tu puisses afficher le titre de ton application dans le template si tu le souhaites. J'ai aussi ajouté les imports nécessaires pour que tu puisses utiliser les routes et les liens dans ton application.

import { RouterOutlet, RouterLink } from '@angular/router'; // ✅ Ajoute RouterLink ici
import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // ✅ Les deux doivent être ici
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { 
   protected readonly title = signal('angular-inscription');
}

