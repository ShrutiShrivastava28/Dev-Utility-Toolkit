import { Component } from '@angular/core';
import { ApiTester } from "../api-tester/api-tester";
import { Base64Component } from "../base64/base64";
import { CommonModule } from '@angular/common';
import { JwtDecoder } from '../jwt-decoder/jwt-decoder';
import { QueryParams } from '../query-params/query-params';
import { UUIDGenerator } from '../uuidgenerator/uuidgenerator';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, ApiTester, Base64Component, JwtDecoder, QueryParams, UUIDGenerator],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
selectedTab: 'APITESTER' | 'BASE64' | 'JWTDECODER' | 'QUERYPARAM' | 'UUIDGENERATOR'= 'APITESTER';

  

   switchTab(tab: 'APITESTER' | 'BASE64'  | 'JWTDECODER' | 'QUERYPARAM'  | 'UUIDGENERATOR') {
    console.log('Switching to:', tab);
  this.selectedTab = tab;
}
}
