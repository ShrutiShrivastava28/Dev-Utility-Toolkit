import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ApiTester } from './api-tester/api-tester';
import { Base64Component } from './base64/base64';
import { Homepage } from './homepage/homepage';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('devUtilityToolKit');
}
