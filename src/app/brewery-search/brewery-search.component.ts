import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brewery-search',
  templateUrl: './brewery-search.component.html',
})


export class BrewerySearchComponent implements OnInit {

  // Another API key just in case: 5e649ec07aa7f2b8b9f5902dbe763b24
  private apiEndpoint = '/v2/locations?key=7a92accaaec73fe3eb08ee2b22e12be4&postalCode=';

  constructor() { }

  ngOnInit() {}

  onSearch() {
    console.log('Search clicked');
  }

}
