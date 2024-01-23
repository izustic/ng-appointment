import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: String = "24";
  items: string[] = ["item1", "item2", "item3", "item4"];
  log(text: string): void {
    let message = "message" + text;
    console.log(message);
  }
}
