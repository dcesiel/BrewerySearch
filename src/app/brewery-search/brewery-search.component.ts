import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Brewery} from './brewery';
import 'rxjs/add/operator/filter';

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
    const breweryArray = new Array<Brewery>();
    if (response.data) {
      response.data.forEach(breweryInfo => {
        const brewery = new Brewery();
        brewery.name = breweryInfo.brewery.name;
        brewery.streetAddress = breweryInfo.streetAddress;
        brewery.website = breweryInfo.brewery.website;
        brewery.logoUrl = (breweryInfo.brewery.images) ? breweryInfo.brewery.images.icon : '';
        breweryArray.push(brewery);
      });
    }
    this.breweryArray = breweryArray;
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

}
