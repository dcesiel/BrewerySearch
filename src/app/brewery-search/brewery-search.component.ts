import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-brewery-search',
  templateUrl: './brewery-search.component.html',
})


export class BrewerySearchComponent implements OnInit {

  searchForm: FormGroup;

  // Another API key just in case: 5e649ec07aa7f2b8b9f5902dbe763b24
  private apiEndpoint = '/v2/locations?key=7a92accaaec73fe3eb08ee2b22e12be4&postalCode=';

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  onSearch() {
    console.log(this.searchForm.get('search').value);
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

}
