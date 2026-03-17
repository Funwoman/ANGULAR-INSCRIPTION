import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterPage } from './components/register-page/register-page';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, RegisterPage],
  standalone: true,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-inscription');
}
