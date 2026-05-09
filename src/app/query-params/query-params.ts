// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-query-params',
//   imports: [],
//   templateUrl: './query-params.html',
//   styleUrl: './query-params.scss',
// })
// export class QueryParams {

// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-query-params',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './query-params.html',
  styleUrls: ['./query-params.scss']
})
export class QueryParams {

  baseUrl: string = '';
  finalUrl: string = '';
  statusMessage: string = '';

  params: { key: string; value: string }[] = [
    { key: '', value: '' }
  ];

  addParam() {
    this.params.push({ key: '', value: '' });
  }

  removeParam(index: number) {
    this.params.splice(index, 1);
  }

  generateUrl() {
    this.statusMessage = '';

    if (!this.baseUrl) {
      this.statusMessage = 'Please enter base URL';
      return;
    }

    const queryString = this.params
      .filter(p => p.key.trim() !== '')
      .map(p => `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`)
      .join('&');

    this.finalUrl = queryString
      ? `${this.baseUrl}?${queryString}`
      : this.baseUrl;

    this.statusMessage = '✅ URL generated';
  }

  clear() {
    this.baseUrl = '';
    this.finalUrl = '';
    this.params = [{ key: '', value: '' }];
    this.statusMessage = '';
  }

  copyUrl() {
    if (!this.finalUrl) return;

    navigator.clipboard.writeText(this.finalUrl)
      .then(() => {
        this.statusMessage = '✅ Copied to clipboard';
        setTimeout(() => this.statusMessage = '', 2000);
      });
  }
}