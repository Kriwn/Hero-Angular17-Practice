import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from "./messages/messages.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}