import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name='alvin';
  item = [{
    name : 'itema',
    price : 520
  }, {
    name : 'itemb',
    price : 220
  }];
  itemArr = ['x1','x2','x3','x4']
  show: boolean = true
  user="";
  message='';
  klickButton() {
    this.message = 'test';
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/