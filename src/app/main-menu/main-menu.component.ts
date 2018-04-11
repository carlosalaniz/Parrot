import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-main-menu]',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    $('#menuToggle').on('click', function(event) {
      $('body').toggleClass('open');
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
