// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-uuidgenerator',
//   imports: [],
//   templateUrl: './uuidgenerator.html',
//   styleUrl: './uuidgenerator.scss',
// })
// export class UUIDGenerator {

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uuidgenerator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uuidgenerator.html',
  styleUrls: ['./uuidgenerator.scss']
})
export class UUIDGenerator {

  uuid: string = '';
  statusMessage: string = '';

  generateUuid() {
    this.uuid = this.createUUID();
    this.statusMessage = '✅ UUID generated';
  }

  createUUID(): string {
    // Modern browser method (best)
    if (crypto && crypto.randomUUID) {
      return crypto.randomUUID();
    }

    // fallback method
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  clear() {
    this.uuid = '';
    this.statusMessage = '';
  }

  copyUuid() {
    if (!this.uuid) return;

    navigator.clipboard.writeText(this.uuid)
      .then(() => {
        this.statusMessage = '✅ Copied';
        setTimeout(() => this.statusMessage = '', 2000);
      });
  }
}