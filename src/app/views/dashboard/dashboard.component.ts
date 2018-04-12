import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  constructor() {}

  ngOnInit() {}
}
