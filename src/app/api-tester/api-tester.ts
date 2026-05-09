import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-tester',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './api-tester.html',
  styleUrls: ['./api-tester.scss']
})
export class ApiTester {

  method: string = 'GET';
  url: string = '';
  body: string = '';
  response: string = '';
  statusMessage: string = '';

  constructor(private http: HttpClient) {}

  sendRequest() {
    this.statusMessage = '';
    this.response = '';

    if (!this.url) {
      this.statusMessage = 'Please enter a URL';
      return;
    }

    if (this.method === 'GET') {
      this.http.get(this.url).subscribe({
        next: (res) => {
          this.response = JSON.stringify(res, null, 2);
          this.statusMessage = '✅ Request successful';
        },
        error: (err) => {
          this.response = '';
          this.statusMessage = `❌ ${err.message}`;
        }
      });
    }

    if (this.method === 'POST') {
      let parsedBody;

      try {
        parsedBody = this.body ? JSON.parse(this.body) : {};
      } catch {
        this.statusMessage = '❌ Invalid JSON body';
        return;
      }

      this.http.post(this.url, parsedBody).subscribe({
        next: (res) => {
          this.response = JSON.stringify(res, null, 2);
          this.statusMessage = '✅ Request successful';
        },
        error: (err) => {
          this.response = '';
          this.statusMessage = `❌ ${err.message}`;
        }
      });
    }
  }
}