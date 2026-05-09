// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-jwt-decoder',
//   imports: [],
//   templateUrl: './jwt-decoder.html',
//   styleUrl: './jwt-decoder.scss',
// })
// export class JwtDecoder {

// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jwt-decoder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './jwt-decoder.html',
  styleUrls: ['./jwt-decoder.scss']
})
export class JwtDecoder {

  token: string = '';

  header: string = '';
  payload: string = '';
  expiry: string = '';

  statusMessage: string = '';

  decodeToken() {
    this.statusMessage = '';
    this.header = '';
    this.payload = '';
    this.expiry = '';

    if (!this.token) {
      this.statusMessage = 'Enter a token';
      return;
    }

    const parts = this.token.split('.');

    if (parts.length !== 3) {
      this.statusMessage = '❌ Invalid JWT format';
      return;
    }

    try {
      const decodedHeader = this.decodeBase64(parts[0]);
      const decodedPayload = this.decodeBase64(parts[1]);

      const headerObj = JSON.parse(decodedHeader);
      const payloadObj = JSON.parse(decodedPayload);

      this.header = JSON.stringify(headerObj, null, 2);
      this.payload = JSON.stringify(payloadObj, null, 2);

      // Expiry
      if (payloadObj.exp) {
        const date = new Date(payloadObj.exp * 1000);
        this.expiry = date.toString();
      } else {
        this.expiry = 'No expiry field';
      }

      this.statusMessage = '✅ Token decoded';
    } catch (e) {
      this.statusMessage = '❌ Failed to decode token';
    }
  }

  decodeBase64(str: string): string {
    // fix URL-safe base64
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    return atob(str);
  }

  clear() {
    this.token = '';
    this.header = '';
    this.payload = '';
    this.expiry = '';
    this.statusMessage = '';
  }

  copyToClipboard(text: string) {
    if (!text) return;

    navigator.clipboard.writeText(text)
      .then(() => {
        this.statusMessage = '✅ Copied';
        setTimeout(() => this.statusMessage = '', 2000);
      });
  }
}
