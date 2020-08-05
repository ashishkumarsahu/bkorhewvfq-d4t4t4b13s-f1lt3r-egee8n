import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent  {
  columns = ['id', 'name', 'revenue', 'status'];

  data = [
    {'id': 'Lorem Ipsum', 'name': 'Lorem Ipsum', 'revenue': '1,039', 'coin': '$', 'status': 2},
    {'id': 'Dolor Sit Amet', 'name': 'Dolor Sit Amet', 'revenue': '13,480', 'coin': '$', 'status': 0},
    {'id': 'Consectetuer', 'name': 'Consectetuer', 'revenue': '162,900', 'coin': '£', 'status': 1},
    {'id': 'Adipiscing Elit', 'name': 'Adipiscing Elit', 'revenue': '326', 'coin': '£', 'status': 1},
    {'id': 'Sed Diam', 'name': 'Sed Diam', 'revenue': '139,090,009',  'coin': '$','status': 0}
  ];
  stopPropagation(event){
  event.stopPropagation();
  // console.log("Clicked!");
}
}

/**  Copyright 2020 Crowe LLP. All Rights Reserved.
    Use of this source code is governed by the license that
    can be found in the LICENSE file contained in
    https://www.npmjs.com/package/@crowellp/sherpacss */
