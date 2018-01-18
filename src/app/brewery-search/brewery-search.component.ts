import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Brewery} from './brewery';
import 'rxjs/add/operator/filter';
import {BrewerySearchUtil} from './brewery-search-util';

@Component({
  selector: 'app-brewery-search',
  templateUrl: './brewery-search.component.html',
})


export class BrewerySearchComponent implements OnInit {

  searchForm: FormGroup;

  breweryArray = new Array<Brewery>();

  private apiEndpoint = '/v2/locations?key=7a92accaaec73fe3eb08ee2b22e12be4&postalCode=';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.createForm();
  }

  ngOnInit() {}

  onSearch() {
    const apiCall = this.apiEndpoint + this.searchForm.get('search').value;
    this.http.get(apiCall).subscribe(response => {
      this.setBreweryArray(response);
    });
  }

  setBreweryArray(response: any) {
    this.breweryArray = BrewerySearchUtil.setBreweryArray(response);
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

}
