import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adv-search',
  templateUrl: './adv-search.component.html',
  styleUrls: ['./adv-search.component.css']
})
export class AdvSearchComponent implements OnInit {
  types: any[];

  constructor() { }

  ngOnInit() {
    this.types = ['News', 'Patents', 'Books'];
  }

}
