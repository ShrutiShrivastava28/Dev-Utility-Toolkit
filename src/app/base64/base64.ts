import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base64',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './base64.html',
  styleUrls: ['./base64.scss']
})
export class Base64Component {

  input: string = '';
  output: string = '';
  statusMessage: string = '';

  encode() {
    this.statusMessage = '';

    try {
      this.output = btoa(this.input);
      this.statusMessage = '✅ Encoded successfully';
    } catch {
      this.output = '';
      this.statusMessage = '❌ Encoding failed';
    }
  }

  decode() {
    this.statusMessage = '';

    try {
      this.output = atob(this.input);
      this.statusMessage = '✅ Decoded successfully';
    } catch {
      this.output = '';
      this.statusMessage = '❌ Invalid Base64 string';
    }
  }

  clear() {
    this.input = '';
    this.output = '';
    this.statusMessage = '';
  }

  copyToClipboard(text: string) {
    if (!text) {
      this.statusMessage = 'Nothing to copy';
      return;
    }

    navigator.clipboard.writeText(text)
      .then(() => {
        this.statusMessage = '✅ Copied to clipboard';
        setTimeout(() => this.statusMessage = '', 2000);
      })
      .catch(() => {
        this.statusMessage = '❌ Copy failed';
      });
  }
}