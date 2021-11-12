import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'producao-tematica';

  constructor(){
    this.habilitaPaginaHome = false;
  }

  habilitaPaginaHome: boolean;

  ngOnInit(): void {
    this.habilitaPaginaHome = true;
  }
}
