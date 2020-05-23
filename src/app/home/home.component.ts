import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mails = 4;
  bufferValue = 50;
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
