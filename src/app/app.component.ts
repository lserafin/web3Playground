/// <references  path="./web3-typescript-typings/index.d.ts"/>
import * as web3 from 'Web3';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = new web3().version.api;
}
