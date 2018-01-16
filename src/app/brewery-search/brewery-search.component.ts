import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brewery-search',
  templateUrl: './brewery-search.component.html',
})


export class BrewerySearchComponent implements OnInit {

  private apiEndpoint = 'http://api.brewerydb.com/v2/locations?key=7a92accaaec73fe3eb08ee2b22e12be4&postalCode=49053';

  constructor() { }

  ngOnInit() {}

}
